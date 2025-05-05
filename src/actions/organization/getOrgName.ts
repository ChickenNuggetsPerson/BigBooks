'use server'


import { prisma } from "@/database/prisma"

export default async function getOrgName(uuid: string) {
    
    const organization = await prisma.organization.findUnique({ where: { uuid: uuid } })
    return organization ? organization.name : "Error"
}