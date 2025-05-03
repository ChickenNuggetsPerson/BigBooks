'use server'

import { generateCompanyContext } from "@/app/CompanyProps"
import { getEM } from "@/database/db"
import { Organization } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"


export default async function submitOrganizationForm(newOrganization: boolean, formData: FormData) {

    const uuid = formData.get("uuid") as string
    const name = formData.get("name") as string
    const notes = formData.get("notes") as string
    const address = formData.get("address") as string

    const periodsPerYear = Number(formData.get("periodsPerYear") as string)
    const periodsRefDate = new Date(formData.get("periodsRefDate") as string)

    const em = await getEM();


    let returnUUID = "" 
    let returnNAME = ""

    if (newOrganization) {
        try {
            const organization = new Organization();

            organization.uuid = crypto.randomUUID() as UUID
            organization.name = name
            organization.notes = notes
            organization.address = address
            organization.isDeleted = false
            organization.periodsPerYear = periodsPerYear
            organization.periodsRefDate = periodsRefDate

            em.persist(organization);

            await em.flush();

            returnUUID = organization.uuid
            returnNAME = organization.name
        } catch (err) { console.log(err) }
    } else {
        try {
            const organization = await em.findOneOrFail(Organization, { uuid: (uuid as UUID) })
            organization.name = name
            organization.notes = notes
            organization.address = address
            organization.periodsPerYear = periodsPerYear
            organization.periodsRefDate = periodsRefDate

            await em.flush()

            returnUUID = organization.uuid
            returnNAME = organization.name

        } catch (err) { console.log(err) }

    }

    revalidatePath(`/organization/overview`)
    console.log(returnUUID, returnNAME)
    return generateCompanyContext(returnUUID, returnNAME)
}