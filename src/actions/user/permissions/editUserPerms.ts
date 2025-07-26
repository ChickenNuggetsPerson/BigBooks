'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { canControlUsers, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"





export default async function editUserRole(userUUID: string, orgUUID: string, perms: string[]) {

    const session = await getSession()
    if (!session) { throw new Error("Invalid Session") }
    await throwIfInsufficientPerms(Permissions.admin.users.edit)

    const user = await prisma.membership.findFirst({ where: { userId: userUUID, organizationId: orgUUID } })
    if (!user) { throw new Error("") }

    const m = await prisma.membership.findFirst({ where: { userId: userUUID, organizationId: orgUUID } })
    if (!m) {
        throw new Error("Membership does not exist")
    }

    if (canControlUsers(user) && !user.orgAdmin && !session.isAdmin) {
        throw new Error("Cannot edit user")
    }

    await prisma.membership.update({
        where: { uuid: m.uuid },
        data: {
            permissions: perms
        }
    })

    // TODO: Make sure to use path of org user page 
    revalidatePath("/user/users/" + userUUID)
}