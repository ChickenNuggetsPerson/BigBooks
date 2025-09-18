import { AvaliableStates, Organization, PayStubItem, PayStubItemType, Prisma, TaxBracket, TaxType } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";




type EmpWithComps = Prisma.EmployeeGetPayload<{ include: { compensations: { include: { hourlyRates: true } } } }>

export function calcSalary(employee: EmpWithComps): Prisma.Decimal {

    let salary = new Prisma.Decimal(0)
    employee.compensations.forEach(comp => {
        if (comp.isSalary) {
            salary = salary.add(comp.salaryAmount ?? new Prisma.Decimal(0))
        } else {
            // TODO: Figure out how to calc salary based on hourly rates
            comp.hourlyRates.forEach(rate => {
                salary = salary.add(rate.rate.mul(52 * 29))
            })

        }
    })
    return salary
}


export async function calcTaxRates( // TODO: Take into account pre-tax deductions
    employee: EmpWithComps,
    organization: Organization,
    payDate: Date
): Promise<PayStubItem[]> {

    const salary = calcSalary(employee)

    if (process.env.NODE_ENV == "development") {
        console.log({ name: employee.firstName, org: organization.name, date: payDate, salary: salary })
    }

    // Finds supported taxes for the employee and the organization.
    // Also finds the correct snapshot
    const taxes = await prisma.tax.findMany({
        where: {
            archived: false,
            AND: [
                {
                    OR: [ // Filter Based on orgUUID and sysAdminControlled
                        { sysAdminControlled: false, organizationID: { equals: organization.uuid } },
                        { sysAdminControlled: true, organizationID: null }
                    ],
                },
                {
                    OR: [ // Filter Based on State
                        {
                            state: AvaliableStates.Other  // Applies to everyone
                        },
                        {
                            state: employee.residence // Employee is in state
                        }
                    ]
                }
            ]
        },
        include: {
            snapshots: {
                where: {
                    effectiveThrough: {
                        gte: payDate, // Only those in effect on or before the pay date
                    }
                },
                orderBy: {
                    effectiveThrough: 'asc',
                },
                take: 1,
                include: {
                    brackets: { // Filter Brackets based on salary ammount
                        orderBy: {
                            min: "asc"
                        },
                        where: {
                            AND: [ // Filter in salary bounds
                                {
                                    OR: [
                                        { hasMinBound: false },
                                        { min: { lte: salary } }
                                    ],
                                },
                                // {
                                //     OR: [
                                //         { hasMaxBound: false },
                                //         { max: { gte: salary } }
                                //     ],
                                // },
                                {
                                    OR: [ // Filter the filing type
                                        {
                                            taxSnapshot: { supportsJoint: true },
                                            filingType: employee.filingStatus
                                        },
                                        {
                                            taxSnapshot: { supportsJoint: false }
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                },
            },
        },
    })

    const items = [] as PayStubItem[]

    taxes.forEach(tax => { // Loop through every avaliable tax
        if (tax.snapshots.length !== 1) { return } // More than one snapshot was returned - Cry 
        const snapshot = tax.snapshots[0]
        if (snapshot.brackets.length == 0) { return } // Cry - Tax snapshot has no information

        if (snapshot.taxType == TaxType.FlatAmmount) { // Do Basic Flat ammount
            try {
                const bracket = getBracketFromSal(snapshot.brackets, salary)
                items.push({
                    name: tax.name,
                    uuid: crypto.randomUUID(),
                    description: "Snapshot: " + snapshot.description,
                    type: PayStubItemType.Tax,
                    percent: null,
                    amount: bracket.ammount,
                    payStubId: "",
                    payrollItemId: null,
                    compensationId: null,
                    hourlyRateId: null,
                    taxID: snapshot.uuid,
                    hours: null,
                    rate: null
                })
            } catch (error) {
                console.log(error)
            }

            return
        }
        if (snapshot.taxType == TaxType.FlatRate) { // Do Basic Flat Rate
            try {
                const bracket = getBracketFromSal(snapshot.brackets, salary)
                items.push({
                    name: tax.name,
                    uuid: crypto.randomUUID(),
                    description: "Snapshot: " + snapshot.description,
                    type: PayStubItemType.Tax,
                    percent: bracket.rate,
                    amount: new Prisma.Decimal(0),
                    payStubId: "",
                    payrollItemId: null,
                    compensationId: null,
                    hourlyRateId: null,
                    taxID: snapshot.uuid,
                    hours: null,
                    rate: null
                })
            } catch (error) {
                console.log(error)
            }

            return
        }


        // Logic for Progressive taxes
        let totalTaxAmmount = new Prisma.Decimal(0)
        let remainingSalary = new Prisma.Decimal(salary)
        let foundEnd = false

        snapshot.brackets.forEach(bracket => {
            if (foundEnd) { return }
            const bracketWidth = bracket.max.minus(bracket.min)

            if (remainingSalary.greaterThan(bracketWidth)) { // Can handle the full ammount of the bracket
                totalTaxAmmount = totalTaxAmmount.add(bracketWidth.mul(bracket.rate))
                remainingSalary = remainingSalary.minus(bracketWidth)
            } else { // Salary falls into this range - This is the last range the salary uses
                totalTaxAmmount = totalTaxAmmount.add(remainingSalary.mul(bracket.rate))
                foundEnd = true // Just in case the database returns more brackets than needed
            }
        })

        if (remainingSalary.lessThan(0) || !foundEnd) {
            console.log("Error Calculating tax for employee... Remaining Salary went negative")
            return
        }

        const taxRate = totalTaxAmmount.dividedBy(salary)
        if (process.env.NODE_ENV == "development") {
            console.log({
                name: tax.name,
                rate: taxRate,
                totalTax: totalTaxAmmount
            })
        }

        items.push({
            name: tax.name,
            uuid: crypto.randomUUID(),
            description: "Snapshot: " + snapshot.description,
            type: PayStubItemType.Tax,
            percent: taxRate,
            amount: new Prisma.Decimal(0),
            payStubId: "",
            payrollItemId: null,
            compensationId: null,
            hourlyRateId: null,
            taxID: snapshot.uuid,
            hours: null,
            rate: null
        })
    })

    for (let i = 0; i < items.length; i++) {
        const item = { ...items[i] }

        if (item.amount.greaterThan(0)) {
            item.amount = item.amount.mul(-1)
        }

        if (item.percent) {
            if (item.percent.greaterThan(0)) {
                item.percent = item.percent.mul(-1)
            }
        }

        items[i] = item
    }

    return items
}



function getBracketFromSal(brackets: TaxBracket[], salary: Prisma.Decimal): TaxBracket {
    if (brackets.length == 0) { throw Error("Not Enough Brackets") }

    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i]

        const inMin = !bracket.hasMinBound || salary.greaterThanOrEqualTo(bracket.min)
        const inMax = !bracket.hasMaxBound || salary.lessThanOrEqualTo(bracket.max)

        if (inMin && inMax) {
            return bracket
        }
    }

    throw Error("Not in Bracket")
}