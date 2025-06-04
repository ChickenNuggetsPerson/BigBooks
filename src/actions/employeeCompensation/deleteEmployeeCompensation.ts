'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"







export default async function deleteEmployeeCompensation(compUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Editor)
    const session = await getSession()
    if (!session) { return }


    await prisma.employeeCompensation.delete({ where: { uuid: compUUID } })
}