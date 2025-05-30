'use server'

import { prisma } from "@/database/prisma"
import { getRoleFromID, RoleTypes } from "./Roles"
import { throwIfInsufficientPerms } from "./throwIfInsufficientPerms"




export default async function getUsersOrgRole(userUUID: string, orgUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Admin)


    const role = await prisma.role.findFirst({ where: { userId: userUUID, organizationId: orgUUID }})
    if (!role) { return null }

    return getRoleFromID(role.role)
}