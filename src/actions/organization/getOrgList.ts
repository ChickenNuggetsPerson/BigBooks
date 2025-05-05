'use server'

import { getDispOrganization } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";




export default async function getOrgList(showDeleted: boolean) {

    const organizations = await prisma.organization.findMany()

    let list = []
    for (let i = 0; i < organizations.length; i++) {
        list.push(await getDispOrganization(organizations[i]))
    }

    list = list.filter((e) => { return e.isDeleted == showDeleted})

    list = list.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1 }
        return 0
    })

    return list
}