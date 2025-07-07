'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"



export default async function setTaxArchive(taxUUID: string, isArchived: boolean) {

    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    const tax = await prisma.tax.findUnique({ where: { uuid: taxUUID } })
    if (!tax) { 
        throw new Error("Invalid UUID")
    }

    // Check permissions and make sure orgUUID's arent messed with
    if (tax.sysAdminControlled) {
        await throwIfInsufficientPerms(RoleTypes.SysAdmin)
    } else {
        await throwIfInsufficientPerms(RoleTypes.Admin)
        if (session.orgUUID !== tax.organizationID) {
            throw new Error("Unmatched OrgUUIDs")
        }
    }

    await prisma.tax.update({
        where: { uuid: taxUUID },
        data: {
            archived: isArchived
        }
    })

    if (tax.sysAdminControlled) {
        // TODO: Add sysadmin tax path 
        revalidatePath("/user/taxes")
    } else {
        revalidatePath("/organization/admin/taxes")
    }
}