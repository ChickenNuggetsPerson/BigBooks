'use server'

import { throwIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"



export default async function deletePayrollItem(itemUUID: string) {

    await throwIfInvalidSession()

    const item = await prisma.payrollItem.findUnique({ where: { uuid: itemUUID }})
    if (!item) { throw new Error("") } 

    // Editing Org or Group payroll items requres admin perms. Emp items require editor perms.
    if (item.organizationId || item.payrollGroupId) {
        await throwIfInsufficientPerms(RoleTypes.Admin)
    } else {
        await throwIfInsufficientPerms(RoleTypes.Editor)
    }

    await prisma.payrollItem.delete({ where: { uuid: itemUUID } })
    
}