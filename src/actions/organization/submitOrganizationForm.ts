'use server'

import { generateCompanyContext } from "@/app/CompanyProps"
import { getSession, getUserFromSession, redirectIfInvalidSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"


// TODO: Change this to a better system
export default async function submitOrganizationForm(newOrganization: boolean, formData: FormData) {

    await redirectIfInvalidSession()

    const uuid = formData.get("uuid") as string
    const name = formData.get("name") as string
    const notes = formData.get("notes") as string
    const address = formData.get("address") as string

    let returnUUID = ""
    let returnNAME = ""

    const session = await getSession()
    const user = await getUserFromSession()

    if (!session) { throw new Error("Insufficient Permissions") }

    if (newOrganization) {
        // New Organization

        if (!user) { throw new Error("Insufficient Permissions") }

        if (user.allocatedOrganizations <= 0 && !session.isAdmin) { throw new Error("Insufficient Permissions") }

        if (name.trim() == "" || address.trim() == "") {
            throw new Error("Did not include name and address.")
        }

        const organization = await prisma.organization.create({
            data: {
                name: name,
                notes: notes,
                address: address,
                isDeleted: false
            }
        })

        if (!session.isAdmin) { // Add user as member 

            await prisma.user.update({
                where: { uuid: user.uuid },
                data: {
                    allocatedOrganizations: user.allocatedOrganizations - 1 // Use up an allocated organization
                }
            })

            await prisma.membership.create({
                data: {
                    userId: user.uuid,
                    organizationId: organization.uuid,
                    permissions: [],
                    orgAdmin: true // They are the org admin by default
                }
            }) // Add the user to the organization
        }

        revalidatePath("/user")

    } else {
        try { // Edit page

            await throwIfInsufficientPerms(Permissions.org.edit)

            if (name.trim() == "" || address.trim() == "") {
                throw new Error("Did not include name and address.")
            }

            await prisma.organization.update({
                where: { uuid: uuid },
                data: {
                    name: name,
                    notes: notes,
                    address: address
                }
            })

            returnUUID = uuid
            returnNAME = name

        } catch (err) { console.log(err) }

    }

    revalidatePath(`/organization/overview`)
    return generateCompanyContext(returnUUID, returnNAME, `${user?.firstName} ${user?.lastName}`, session.expireTime)
}