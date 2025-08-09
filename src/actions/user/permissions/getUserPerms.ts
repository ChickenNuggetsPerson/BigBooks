'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { canControlUsers, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"


export default async function getUserPerms(userUUID: string, orgUUID: string) {

    const session = await getSession()
    if (!session) { throw new Error("Invalid Session") }
    await throwIfInsufficientPerms(Permissions.admin.users.edit)

    const membership = await prisma.membership.findFirst({ where: { userId: userUUID, organizationId: orgUUID }, include: { user: true, organization: true } })
    if (!membership) { throw new Error("Error Finding User") }

    if (canControlUsers(membership) && !membership.orgAdmin && !session.isAdmin) {
        throw new Error("Cannot view user")
    }

    return {
        name: `${membership.user.firstName} ${membership.user.lastName}`,
        orgName: membership.organization.name,
        perms: membership.permissions
    }

}