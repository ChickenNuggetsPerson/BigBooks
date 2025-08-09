'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { canControlUsers, isOrgAdmin, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"





export default async function editUserPerms(userUUID: string, orgUUID: string, perms: string[]) {

    const session = await getSession()
    if (!session) { throw new Error("Invalid Session") }
    await throwIfInsufficientPerms(Permissions.admin.users.edit)

    const membership = await prisma.membership.findFirst({ where: { userId: userUUID, organizationId: orgUUID } })
    if (!membership) { throw new Error("") }

    if (membership.orgAdmin && !session.isAdmin) {
        throw new Error("Cannot edit user")
    }

    if (canControlUsers(membership) && (!await isOrgAdmin(orgUUID))) {
        throw new Error("Cannot edit user")
    }

    await prisma.membership.update({
        where: { uuid: membership.uuid },
        data: {
            permissions: perms
        }
    })

    // TODO: Make sure to use path of org user page 
    revalidatePath("/user/users/" + userUUID)
}