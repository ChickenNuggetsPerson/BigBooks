'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deleteOrganization(orgUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Admin)

    try {
        await prisma.organization.delete({ where: {uuid: orgUUID }})
    } catch (err) { console.log(err) }


    revalidatePath(`/`)
    redirect(`/`)
}