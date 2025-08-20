'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"




export default async function updateActivePayrollDraft(draftUUID: string) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)
    
    const membership = await getOrgMembership()
    if (!membership) { throw new Error("Insufficient Permissions") }
    if (membership.activeDraftId == draftUUID) { return; }

    const draft = await prisma.payrollDraft.findUnique({
        where: {
            uuid: draftUUID,
            membershipId: membership.uuid
        }
    })

    if (!draft) { throw new Error("Draft does not exist") }

    await prisma.membership.update({
        where: { uuid: membership.uuid },
        data: {
            activeDraft: {
                connect: {
                    uuid: draft.uuid
                }
            }
        }
    })
}