'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"


export default async function deactivateEmployee(empUUID: string, deactivate: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(Permissions.employee.deactivate)

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