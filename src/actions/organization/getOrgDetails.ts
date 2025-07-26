'use server'


import { redirectIfInvalidSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";





export default async function getOrgDetails(uuid: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(Permissions.org.view)

    const organization = await prisma.organization.findUnique({ where: { uuid: uuid }})
    return organization
}