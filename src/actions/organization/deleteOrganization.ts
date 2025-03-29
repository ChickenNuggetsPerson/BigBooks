'use server'

import { getEM } from "@/database/db"
import { Organization } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deleteOrganization(orgUUID: string) {
    try {

        const em = await getEM();

        const org = await em.findOneOrFail(Organization, { uuid: (orgUUID as UUID) })
        await em.removeAndFlush(org)

    } catch (err) { console.log(err) }


    revalidatePath(`/`)
    redirect(`/`)
}