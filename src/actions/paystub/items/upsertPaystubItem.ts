'use server'

import { PayStubItem } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { randomUUID } from "crypto"





export default async function upsertPaystubItem(paystubItem: PayStubItem) {

    // TODO: Handle permissions
    console.log(paystubItem)

    // Check to make sure the earnings object is configured correctly
    // Specifically the relations
    if (paystubItem.isDefault) {
        let nullCount = 0
        if (paystubItem.organizationId == null) { nullCount ++ }
        if (paystubItem.payrollGroupId == null) { nullCount ++ }
        if (paystubItem.employeeId     == null) { nullCount ++ }

        if (nullCount !== 2 || paystubItem.payStubId !== null) { throw new Error("Not Linked correctly") }

        if (paystubItem.organizationId) {
            await prisma.organization.findUniqueOrThrow({ where: { uuid: paystubItem.organizationId } })
        }
        if (paystubItem.payrollGroupId) {
            await prisma.payrollGroup.findUniqueOrThrow({ where: { uuid: paystubItem.payrollGroupId } })
        }
        if (paystubItem.employeeId) {
            await prisma.employee.findUniqueOrThrow({ where: { uuid: paystubItem.employeeId } })
        }

        if (paystubItem.payStubId !== null) { throw new Error("Linked to Paystub") }

    } else {
        if (paystubItem.payStubId === null) { throw new Error("Not Linked to Paystub") }

        if (paystubItem.payStubId) {
            await prisma.payStub.findUniqueOrThrow({ where: { uuid: paystubItem.payStubId } })
        }
    }

    const currentEearning = await prisma.payStubItem.findUnique({ where: { uuid: paystubItem.uuid } })
    if (!currentEearning) {
        paystubItem.uuid = randomUUID()
    }

    await prisma.payStubItem.upsert({
        where: { uuid: paystubItem.uuid },
        create: paystubItem, 
        update: paystubItem
    })
}