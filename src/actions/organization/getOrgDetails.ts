'use server'


import { redirectIfInvalidSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { getDispOrganization, getEmptyDispOrganization } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";





export default async function getOrgDetails(uuid: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    const organization = await prisma.organization.findUnique({ where: { uuid: uuid }})

    if (organization) {
        return getDispOrganization(organization)
    } else {
        return getEmptyDispOrganization("Error")

    }
}