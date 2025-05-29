'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { getIDFromRoleType, RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"







export default async function createUserRole(userUUID: string, orgUUID: string, role: RoleTypes) {
    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

    // Verify user and org exists
    const user = await prisma.user.findUnique({ where: { uuid: userUUID } })
    const org = await prisma.organization.findUnique({ where: { uuid: orgUUID } })

    if (!user || !org) { throw new Error("Invalid Parms") }

    const r = await prisma.role.findFirst({ where: { userId: userUUID, organizationId: orgUUID }})
    if (r) {
        throw new Error("Role Already exists for organization")
    }

    // Create role in database
    await prisma.role.create({
        data: {
            userId: user.uuid,
            organizationId: org.uuid,
            role: getIDFromRoleType(role)
        }
    })

    revalidatePath("/user/users/" + user.uuid)
}