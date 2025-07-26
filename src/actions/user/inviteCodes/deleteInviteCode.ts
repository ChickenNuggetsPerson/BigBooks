'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"






export default async function deleteInviteCode(codeUUID: string) {

    await throwIfInsufficientPerms(Permissions.admin.users.edit)
    const session = await getSession()
    if (!session) { return }

    await prisma.inviteCode.deleteMany({ 
        where: {
            uuid: codeUUID,
            organizationId: session.orgUUID
        }
    })

}