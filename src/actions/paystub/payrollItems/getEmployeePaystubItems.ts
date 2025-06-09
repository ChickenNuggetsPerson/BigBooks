'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { PayrollItem, PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { CalcStubSalary } from "@/database/Taxes/SalaryCalc"
import { serializeData } from "@/utils/serialization"
import { randomUUID } from "crypto"




// Convert Payroll item to paystub item
function PayrollItemToStubItem(item: PayrollItem): PayStubItem {
    return {
        name: item.name,
        uuid: randomUUID(),
        payStubId: "",
        payrollItemId: item.uuid,
        type: item.type,
        description: null,
        hours: null,
        rate: null,
        percent: item.percent,
        amount: item.amount
    }
}


export default async function getEmployeePaystubItems(empUUID: string) {

    // TODO: Handle permissions
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    const data = {
        defaults: {
            organization: [] as PayStubItem[],
            group: [] as { groupName: string, items: PayStubItem[] }[],
            employee: [] as PayStubItem[]
        },
        comps: [] as { compName: string, items: PayStubItem[] }[]
    }

    const employee = await prisma.employee.findUnique({ where: { uuid: empUUID }, include: { defaultPayrollItems: true } })
    if (!employee) { return serializeData(data) }

    // TODO: Limit based on comp limits

    // Organization items
    data.defaults.organization = (await prisma.payrollItem.findMany({ where: { organizationId: employee.organizationId } })).map(i => PayrollItemToStubItem(i))

    const comps = await prisma.employeeCompensation.findMany({ where: { employeeId: employee.uuid }, include: { payrollGroup: true, hourlyRates: true } })

    // Group Items
    for (let i = 0; i < comps.length; i++) {
        const comp = comps[i]

        const items = await prisma.payrollItem.findMany({ where: { payrollGroupId: comp.payrollGroupId } })
        if (items.length === 0) { continue }

        data.defaults.group.push({
            groupName: comp.payrollGroup.name,
            items: items.map(i => PayrollItemToStubItem(i))
        })
    }

    // Employee Default items
    data.defaults.employee = employee.defaultPayrollItems.map(i => PayrollItemToStubItem(i))


    // Compensation Items
    for (let i = 0; i < comps.length; i++) {
        const comp = comps[i]

        if (comp.isSalary) { // Salary Comp
            data.comps.push({
                compName: comp.payrollGroup.name,
                items: [{
                    name: "Salary",
                    uuid: randomUUID(),
                    payStubId: "",
                    payrollItemId: null,
                    type: PayStubItemType.Earning,
                    description: null,
                    hours: null,
                    rate: null,
                    percent: null,
                    amount: CalcStubSalary(comp.salaryAmount ?? new Prisma.Decimal(0), comp.payrollGroup.payFrequency)
                }]
            })
        } else { // Hourly Comp

            const c = {
                compName: comp.payrollGroup.name,
                items: [] as PayStubItem[]
            }

            comp.hourlyRates.forEach(rate => {
                c.items.push({
                    name: rate.name,
                    uuid: randomUUID(),
                    payStubId: "",
                    payrollItemId: null,
                    type: PayStubItemType.Earning,
                    description: null,
                    hours: null,
                    rate: rate.rate,
                    percent: null,
                    amount: new Prisma.Decimal(0)
                })

                if (rate.canOvertime) {
                    c.items.push({
                        name: `OT: ${rate.name}`,
                        uuid: randomUUID(),
                        payStubId: "",
                        payrollItemId: null,
                        type: PayStubItemType.Earning,
                        description: null,
                        hours: null,
                        rate: rate.rate.mul(1.5),
                        percent: null,
                        amount: new Prisma.Decimal(0)
                    })
                }
            })

            data.comps.push(c)

        }
    }

    return serializeData(data)
}