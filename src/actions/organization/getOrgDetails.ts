'use server'


import { getDispOrganization, getEmptyDispOrganization } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";





export default async function getOrgDetails(uuid: string) {

    const organization = await prisma.organization.findUnique({ where: { uuid: uuid }})

    if (organization) {
        return getDispOrganization(organization)
    } else {
        return getEmptyDispOrganization("Error")

    }
}