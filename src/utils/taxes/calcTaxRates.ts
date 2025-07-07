import { AvaliableStates, Organization, PayStubItem, PayStubItemType, Prisma, TaxType } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";






export const StateOptions = Object.keys(AvaliableStates).map(state => { return { label: state, id: state } })

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


export async function calcTaxRates(
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
                        where: {
                            AND: [ // Filter in salary bounds
                                {
                                    OR: [
                                        { hasMinBound: false },
                                        { min: { lte: salary } }
                                    ],
                                },
                                {
                                    OR: [
                                        { hasMaxBound: false },
                                        { max: { gte: salary } }
                                    ],
                                },
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

    taxes.forEach(tax => {
        if (tax.snapshots.length !== 1) { return }
        const snapshot = tax.snapshots[0]
        if (snapshot.brackets.length !== 1) { return }
        const bracket = snapshot.brackets[0]

        items.push({
            name: tax.name,
            uuid: crypto.randomUUID(),
            description: "Tax Snapshot: " + snapshot.description,
            type: PayStubItemType.Tax,
            percent: bracket.type == TaxType.FlatRate ? bracket.rate.mul(-1) : null,
            amount: bracket.type == TaxType.FlatAmmount ? bracket.ammount.mul(-1) : new Prisma.Decimal(0),
            payStubId: "",
            payrollItemId: null,
            compensationId: null,
            hourlyRateId: null,
            taxID: snapshot.uuid,
            hours: null,
            rate: null
        })
    })

    return items
}