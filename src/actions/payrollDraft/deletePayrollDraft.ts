'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"



export default async function deletePayrollDraft(draftUUID: string) {
    
    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)

    const membership = await getOrgMembership()
    if (!membership) { throw new Error("Insufficient Permissions") }

    await prisma.payrollDraft.delete({
        where: {
            uuid: draftUUID,
            membershipId: membership.uuid
        }
    })
}