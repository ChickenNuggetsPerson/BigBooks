'use server'

import { PayrollItem } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { randomUUID } from "crypto"





export default async function upsertPayrollItems(paystubItem: PayrollItem) {

    // TODO: Handle permissions
    // console.log(paystubItem)

    // Check to make sure the earnings object is configured correctly
    // Specifically the relations
    let nullCount = 0
    if (paystubItem.organizationId == null) { nullCount++ }
    if (paystubItem.payrollGroupId == null) { nullCount++ }
    if (paystubItem.employeeId     == null) { nullCount++ }

    if (nullCount !== 2) { throw new Error("Not Linked correctly") }

    if (paystubItem.organizationId) {
        await prisma.organization.findUniqueOrThrow({ where: { uuid: paystubItem.organizationId } })
    }
    if (paystubItem.payrollGroupId) {
        await prisma.payrollGroup.findUniqueOrThrow({ where: { uuid: paystubItem.payrollGroupId } })
    }
    if (paystubItem.employeeId) {
        await prisma.employee.findUniqueOrThrow({ where: { uuid: paystubItem.employeeId } })
    }

    const currentEearning = await prisma.payrollItem.findUnique({ where: { uuid: paystubItem.uuid } })
    if (!currentEearning) {
        paystubItem.uuid = randomUUID()
    }

    await prisma.payrollItem.upsert({
        where: { uuid: paystubItem.uuid },
        create: paystubItem,
        update: paystubItem
    })
}