'use server'

import { getEM } from "@/database/db"
import { Organization } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deactivateOrganization(orgUUID: string, deactivate: boolean) {
    try {

        const em = await getEM();

        const employee = await em.findOneOrFail(Organization, { uuid: (orgUUID as UUID) })
        employee.isDeleted = deactivate

        await em.flush()

    } catch(err) { console.log(err) }


    if (deactivate) {
        revalidatePath(`/`)
        redirect(`/`)
    } else {
        revalidatePath(`/organization`)
        redirect(`/organization`)
    }

}