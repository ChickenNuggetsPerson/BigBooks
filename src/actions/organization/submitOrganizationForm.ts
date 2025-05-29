'use server'

import { generateCompanyContext } from "@/app/CompanyProps"
import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"


export default async function submitOrganizationForm(newOrganization: boolean, formData: FormData) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

    const uuid = formData.get("uuid") as string
    const name = formData.get("name") as string
    const notes = formData.get("notes") as string
    const address = formData.get("address") as string

    const periodsPerYear = Number(formData.get("periodsPerYear") as string)
    const periodsRefDate = new Date(formData.get("periodsRefDate") as string)

    let returnUUID = ""
    let returnNAME = ""

    if (newOrganization) {
        try {

            const organization = await prisma.organization.create({
                data: {
                    name: name,
                    notes: notes,
                    address: address,
                    isDeleted: false,
                    periodsPerYear: periodsPerYear,
                    periodsRefDate: periodsRefDate
                }
            })

            returnUUID = organization.uuid
            returnNAME = organization.name
        } catch (err) { console.log(err) }
    } else {
        try {

            await prisma.organization.update({
                where: { uuid: uuid },
                data: {
                    name: name,
                    notes: notes,
                    address: address,
                    periodsPerYear: periodsPerYear,
                    periodsRefDate: periodsRefDate
                }
            })

            returnUUID = uuid
            returnNAME = name

        } catch (err) { console.log(err) }

    }

    revalidatePath(`/organization/overview`)
    console.log(returnUUID, returnNAME)
    return generateCompanyContext(returnUUID, returnNAME)
}