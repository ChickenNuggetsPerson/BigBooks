'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function changeOrganizationStatus(orgUUID: string, deactivate: boolean) {

    await redirectIfInvalidSession()
    
    if (deactivate) {
        await throwIfInsufficientPerms(Permissions.admin.organization.deactivate)
    } else {
        await throwIfInsufficientPerms(Permissions.admin.organization.activate)
    }

    try {
        await prisma.organization.update({
            where: { uuid: orgUUID },
            data: {
                isDeleted : deactivate
            }
        })

    } catch(err) { console.log(err) }


    if (deactivate) {
        revalidatePath(`/`)
        redirect(`/`)
    } else {
        revalidatePath(`/organization`)
        redirect(`/organization`)
    }

}