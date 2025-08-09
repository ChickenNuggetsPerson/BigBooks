'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { canControlUsers, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"






export default async function deleteUserPerms(userUUID: string, orgUUID: string) {

    const session = await getSession()
    if (!session) { throw new Error("Invalid Session")  }
    await throwIfInsufficientPerms(Permissions.admin.users.del)

    const membership = await prisma.membership.findFirst({ where: { userId: userUUID, organizationId: orgUUID } })
    if (!membership) { throw new Error("") }

    if (canControlUsers(membership) && !membership.orgAdmin && !session.isAdmin) {
        throw new Error("Cannot edit user")
    }

    await prisma.membership.deleteMany({ where: { userId: userUUID, organizationId: orgUUID } })

    revalidatePath("/user/users/" + userUUID)
}