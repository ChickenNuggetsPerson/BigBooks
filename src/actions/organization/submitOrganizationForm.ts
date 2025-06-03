'use server'

import { generateCompanyContext } from "@/app/CompanyProps"
import { getSession, getUserFromSession, redirectIfInvalidSession } from "@/auth/auth"
import { getIDFromRoleType, RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function submitOrganizationForm(newOrganization: boolean, formData: FormData) {

    await redirectIfInvalidSession()

    const uuid = formData.get("uuid") as string
    const name = formData.get("name") as string
    const notes = formData.get("notes") as string
    const address = formData.get("address") as string

    const periodsPerYear = Number(formData.get("periodsPerYear") as string)
    const periodsRefDate = new Date(formData.get("periodsRefDate") as string)

    let returnUUID = ""
    let returnNAME = ""

    if (newOrganization) {
        // New Organization

        const session = await getSession()
        const user = await getUserFromSession()

        if (!user || !session) { throw new Error("Insufficient Permissions") }

        if (user.allocatedOrganizations <= 0 && !session.isAdmin) { throw new Error("Insufficient Permissions") }

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

        if (!session.isAdmin) {

            await prisma.user.update({
                where: { uuid: user.uuid },
                data: {
                    allocatedOrganizations: user.allocatedOrganizations - 1 // Use up an allocated organization
                }
            })

            await prisma.role.create({
                data: {
                    userId: user.uuid,
                    organizationId: organization.uuid,
                    role: getIDFromRoleType(RoleTypes.Admin)
                }
            }) // Add the user to the organization
        }

        revalidatePath("/user")
        redirect("/user")

    } else {
        try { // Edit page

            await throwIfInsufficientPerms(RoleTypes.Admin)

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
    return generateCompanyContext(returnUUID, returnNAME)
}