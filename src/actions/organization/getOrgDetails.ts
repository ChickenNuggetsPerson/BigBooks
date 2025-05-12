'use server'


import { redirectIfInvalidSession } from "@/auth/auth";
import { getDispOrganization, getEmptyDispOrganization } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";





export default async function getOrgDetails(uuid: string) {

    await redirectIfInvalidSession()

    const organization = await prisma.organization.findUnique({ where: { uuid: uuid }})

    if (organization) {
        return getDispOrganization(organization)
    } else {
        return getEmptyDispOrganization("Error")

    }
}