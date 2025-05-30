'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"







export default async function getInviteCodes() {

    await throwIfInsufficientPerms(RoleTypes.Admin)
    const session = await getSession()
    if (!session) { return [] }

    await prisma.inviteCode.deleteMany({ // Delete expired codes 
        where: {
            expires: {
                lt: new Date(),
            },
        },
    })

    return await prisma.inviteCode.findMany({ where: { organizationId: session.orgUUID } })
}