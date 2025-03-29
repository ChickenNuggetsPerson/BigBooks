'use server'

import { getEM } from "@/database/db"
import { Organization } from "@/database/models/Models"
import { UUID } from "crypto"
import { getDispOrganization, getEmptyDispOrganization } from "@/database/models/DisplayModels";





export default async function getOrgDetails(uuid: string) {

    const em = await getEM();

    const organization = await em.findOne(Organization, { uuid: (uuid as UUID) })

    // await sleep(1000)

    if (organization) {
        return getDispOrganization(organization)
    } else {
        return getEmptyDispOrganization("Error")

    }
}