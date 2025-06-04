'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"


export default async function submitEmployeeForm(newEmployee: boolean, formData: FormData) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    const orgUUID = formData.get("orgUUID") as string
    let uuid = formData.get("uuid") as string

    const firstName = formData.get("firstName") as string
    const middleName = formData.get("middleName") as string
    const lastname = formData.get("lastName") as string

    const email = formData.get("email") as string
    const phoneNumber = formData.get("phoneNumber") as string

    const notes = formData.get("notes") as string
    const address = formData.get("address") as string
    const ssn = formData.get("ssn") as string

    if (newEmployee) {
        try {

            const u = await prisma.employee.create({
                data: {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastname,
                    notes: notes,
                    address: address,
                    ssn: ssn,
                    email: email,
                    phoneNumber: phoneNumber,
                    isDeleted: false,
                    organizationId: orgUUID,
                }
            })
            
            uuid = u.uuid

        } catch (err) { console.log(err) }
    } else {
        try {

            await prisma.employee.update({
                where: { uuid: uuid },
                data: {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastname,
                    notes: notes,
                    address: address,
                    ssn: ssn,
                    email: email,
                    phoneNumber: phoneNumber
                }
            })

        } catch (err) { console.log(err) }

    }

    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${uuid}`)

    return uuid
}