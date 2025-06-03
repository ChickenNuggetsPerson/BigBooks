'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import getOrgRole from "@/auth/roles/getOrgRole"
import { getIDFromRoleType, getRoleFromID, RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"





export default async function editUserRole(userUUID: string, orgUUID: string, role: RoleTypes) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

    const r = await prisma.role.findFirst({ where: { userId: userUUID, organizationId: orgUUID } })
    if (!r) {
        throw new Error("Role does not exist")
    }

    const currentRole = await prisma.role.findFirst({ where: { userId: userUUID, organizationId: orgUUID }})
    const userRole = await getOrgRole()
    if (userRole.level <= getRoleFromID(currentRole?.role ?? "").level) { // You cannot edit the roles of other admins 
        throw new Error("Insufficient Permissions")
    }

    await prisma.role.update({
        where: { uuid: r.uuid },
        data: {
            role: getIDFromRoleType(role)
        }
    })

    revalidatePath("/user/users/" + userUUID)
}