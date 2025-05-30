'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"






export default async function deleteInviteCode(codeUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Admin)
    const session = await getSession()
    if (!session) { return }

    await prisma.inviteCode.deleteMany({ 
        where: {
            uuid: codeUUID,
            organizationId: session.orgUUID
        }
    })

}