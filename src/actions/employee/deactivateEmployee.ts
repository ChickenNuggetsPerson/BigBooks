'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"


export default async function deactivateEmployee(empUUID: string, deactivate: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    try {

        // Update the isDeleted flag
        await prisma.employee.update({
            where: { uuid: empUUID }, 
            data: {
                isDeleted: deactivate,
            },
        });

    } catch (err) { console.log(err) }


    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${empUUID}`)

}