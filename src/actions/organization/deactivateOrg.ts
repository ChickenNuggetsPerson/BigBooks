'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deactivateOrganization(orgUUID: string, deactivate: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

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