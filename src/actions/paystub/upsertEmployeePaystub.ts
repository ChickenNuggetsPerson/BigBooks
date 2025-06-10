'use server'

import { getSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { PayStubItem, Prisma } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { deserializeData, SerializationResult } from "@/utils/serialization";
import { updatePaystubTotals } from "./PaystubFunctions";



type PaystubWithItems = Prisma.PayStubGetPayload<{ include: { items: true } }>

export default async function upsertEmployeePaystub(data: SerializationResult<PaystubWithItems>) {

    await throwIfInsufficientPerms(RoleTypes.Editor)
    const session = await getSession()
    if (!session) { return }

    let paystub = deserializeData(data)
    const currentStub = await prisma.payStub.findUnique({ where: { uuid: paystub.uuid }, include: { items: true } })
    if (currentStub?.locked) { return }
    if (currentStub?.lockedTime) { return }
    if (currentStub?.submittedTime) { return }

    // Calc totals 
    paystub = updatePaystubTotals(paystub)

    let stubUUID = ""
    let currentItems = [] as PayStubItem[]

    if (currentStub) { // Editing stub
        if (currentStub.locked) { return } // Can't edit locked stubs
        await prisma.payStub.update({
            where: { uuid: currentStub.uuid },
            data: {
                payDate: paystub.payDate,
                periodStart: paystub.periodStart,
                periodEnd: paystub.periodEnd,
                grossEarnings: paystub.grossEarnings,
                totalTaxes: paystub.totalTaxes,
                totalExtras: paystub.totalExtras,
                netPay: paystub.netPay
            }
        })

        stubUUID = currentStub.uuid
        currentItems = currentStub.items

    } else { // Create stub

        const stub = await prisma.payStub.create({
            data: {
                employeeId: paystub.employeeId,
                locked: false,

                payDate: paystub.payDate,
                periodStart: paystub.periodStart,
                periodEnd: paystub.periodEnd,
                grossEarnings: paystub.grossEarnings,
                totalTaxes: paystub.totalTaxes,
                totalExtras: paystub.totalExtras,
                netPay: paystub.netPay
            }
        })

        stubUUID = stub.uuid
        currentItems = []
    }


    // New / Edit items
    for (let i = 0; i < paystub.items.length; i++) {
        const item = paystub.items[i]
        item.payStubId = stubUUID

        await prisma.payStubItem.upsert({
            where: { uuid: item.uuid },
            create: {
                name: item.name,
                payStubId: item.payStubId,
                payrollItemId: item.payrollItemId,
                type: item.type,
                description: item.description,
                hours: item.hours,
                rate: item.rate,
                percent: item.percent,
                amount: item.amount
            },
            update: {
                name: item.name,
                payStubId: item.payStubId,
                payrollItemId: item.payrollItemId,
                type: item.type,
                description: item.description,
                hours: item.hours,
                rate: item.rate,
                percent: item.percent,
                amount: item.amount
            }
        })
    }

    const deletedItems = currentItems.filter(item => paystub.items.findIndex(i => i.uuid == item.uuid) == -1)
    for (let i = 0; i < deletedItems.length; i++) {
        await prisma.payStubItem.delete({ where: { uuid: deletedItems[i].uuid } })
    }
}