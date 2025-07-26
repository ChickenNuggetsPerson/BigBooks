'use server'

import { throwIfInvalidSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"



export default async function deletePayrollItem(itemUUID: string) {

    await throwIfInvalidSession()

    const item = await prisma.payrollItem.findUnique({ where: { uuid: itemUUID }})
    if (!item) { throw new Error("") } 

    // Check perms
    if (item.organizationId) {
        await throwIfInsufficientPerms(Permissions.admin.orgItem.edit)
    }
    if (item.payrollGroupId) {
        await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.items.edit)
    }
    if (item.employeeId) {
        await throwIfInsufficientPerms(Permissions.employee.items.edit)
    }

    await prisma.payrollItem.delete({ where: { uuid: itemUUID } })
    
}