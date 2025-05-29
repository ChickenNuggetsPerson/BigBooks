'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"






export default async function deleteUserRole(userUUID: string, orgUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

    await prisma.role.deleteMany({ where: { userId: userUUID, organizationId: orgUUID }})

    revalidatePath("/user/users/" + userUUID)
}