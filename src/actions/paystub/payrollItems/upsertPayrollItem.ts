'use server'


import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
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
    if (paystubItem.employeeId == null) { nullCount++ }

    if (nullCount !== 2) { throw new Error("Not Linked correctly") } // Only one uuid can be linked

    
    // Check perms
    if (paystubItem.organizationId) {
        await throwIfInsufficientPerms(Permissions.admin.orgItem.edit)
    }
    if (paystubItem.payrollGroupId) {
        await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.items.edit)
    }
    if (paystubItem.employeeId) {
        await throwIfInsufficientPerms(Permissions.employee.items.edit)
    }


    // Make sure connection is valid
    // TODO: Verify the user has permissions to access this item 
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