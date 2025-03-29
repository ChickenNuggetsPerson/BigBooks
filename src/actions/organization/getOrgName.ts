'use server'

import { getEM } from "@/database/db"
import { Organization } from "@/database/models/Models"
import { UUID } from "crypto"

export default async function getOrgName(uuid: string) {
    const em = await getEM();
    
    const organization = await em.findOne(Organization, { uuid: (uuid as UUID) })
    return organization ? organization.name : "Error"
}