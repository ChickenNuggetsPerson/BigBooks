'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import getOrgRole from "@/auth/roles/getOrgRole"
import { getRoleFromID, RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"






export default async function deleteUserRole(userUUID: string, orgUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

    const currentRole = await prisma.role.findFirst({ where: { userId: userUUID, organizationId: orgUUID } })
    const userRole = await getOrgRole()
    if (userRole.level <= getRoleFromID(currentRole?.role ?? "").level) { // You cannot edit the roles of other admins 
        throw new Error("Insufficient Permissions")
    }

    await prisma.role.deleteMany({ where: { userId: userUUID, organizationId: orgUUID } })

    revalidatePath("/user/users/" + userUUID)
}