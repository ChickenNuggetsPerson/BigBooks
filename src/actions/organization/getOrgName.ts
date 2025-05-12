'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"

export default async function getOrgName(uuid: string) {

    await redirectIfInvalidSession()
    
    const organization = await prisma.organization.findUnique({ where: { uuid: uuid } })
    return organization ? organization.name : "Error"
}