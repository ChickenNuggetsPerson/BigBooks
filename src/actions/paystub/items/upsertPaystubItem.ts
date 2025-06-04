'use server'

import { PayStubItem } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { randomUUID } from "crypto"





export default async function upsertPaystubItem(earnings: PayStubItem) {

    // TODO: Handle permissions


    // Check to make sure the earnings object is configured correctly
    // Specifically the relations
    if (earnings.isDefault) {
        let nullCount = 0
        if (earnings.organizationId == null) { nullCount ++ }
        if (earnings.payrollGroupId == null) { nullCount ++ }
        if (earnings.employeeId     == null) { nullCount ++ }

        if (nullCount !== 2 || earnings.payStubId !== null) { throw new Error("Not Linked correctly") }

        if (earnings.organizationId) {
            await prisma.organization.findUniqueOrThrow({ where: { uuid: earnings.organizationId } })
        }
        if (earnings.payrollGroupId) {
            await prisma.payrollGroup.findUniqueOrThrow({ where: { uuid: earnings.payrollGroupId } })
        }
        if (earnings.employeeId) {
            await prisma.employee.findUniqueOrThrow({ where: { uuid: earnings.employeeId } })
        }

        if (earnings.payStubId !== null) { throw new Error("Linked to Paystub") }

    } else {
        if (earnings.payStubId === null) { throw new Error("Not Linked to Paystub") }

        if (earnings.payStubId) {
            await prisma.payStub.findUniqueOrThrow({ where: { uuid: earnings.payStubId } })
        }
    }

    const currentEearning = await prisma.payStubItem.findUnique({ where: { uuid: earnings.uuid } })
    if (!currentEearning) {
        earnings.uuid = randomUUID()
    }

    await prisma.payStubItem.upsert({
        where: { uuid: earnings.uuid },
        create: earnings, 
        update: earnings
    })
}