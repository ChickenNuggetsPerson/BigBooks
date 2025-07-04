'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { PayrollItem } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { deserializeData, SerializationResult } from "@/utils/serialization"
import { randomUUID } from "crypto"





export default async function upsertPayrollItem(item: SerializationResult<PayrollItem>) {

    const paystubItem = deserializeData(item)

    // Check to make sure the earnings object is configured correctly
    // Specifically the relations
    let nullCount = 0
    if (paystubItem.organizationId == null) { nullCount++ }
    if (paystubItem.payrollGroupId == null) { nullCount++ }
    if (paystubItem.employeeId     == null) { nullCount++ }

    // Check permissions
    if (paystubItem.organizationId || paystubItem.payrollGroupId) {
        await throwIfInsufficientPerms(RoleTypes.Admin)
    } else {
        await throwIfInsufficientPerms(RoleTypes.Editor)
    }

    if (nullCount !== 2) { throw new Error("Not Linked correctly") } // Only one uuid can be linked

    // Make sure connection is valid
    if (paystubItem.organizationId) {
        await prisma.organization.findUniqueOrThrow({ where: { uuid: paystubItem.organizationId } })
    }
    if (paystubItem.payrollGroupId) {
        await prisma.payrollGroup.findUniqueOrThrow({ where: { uuid: paystubItem.payrollGroupId } })
    }
    if (paystubItem.employeeId) {
        await prisma.employee.findUniqueOrThrow({ where: { uuid: paystubItem.employeeId } })
    }

    // Check if payroll item exists
    const currentEearning = await prisma.payrollItem.findUnique({ where: { uuid: paystubItem.uuid } })
    if (!currentEearning) {
        paystubItem.uuid = randomUUID()
    }

    // Create / Edit payroll item
    await prisma.payrollItem.upsert({
        where: { uuid: paystubItem.uuid },
        create: paystubItem,
        update: paystubItem
    })
}