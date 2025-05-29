'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"

export default async function getOrgName(uuid: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)
    
    const organization = await prisma.organization.findUnique({ where: { uuid: uuid } })
    return organization ? organization.name : "Error"
}