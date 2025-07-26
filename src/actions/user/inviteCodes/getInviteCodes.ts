'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"







export default async function getInviteCodes() {

    await throwIfInsufficientPerms(Permissions.admin.users.view)
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