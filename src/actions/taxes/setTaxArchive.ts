'use server'

import { getSession, throwIfNotSYSAdmin } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Permissions } from "@/auth/permissions/PermissionsDef"



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
        await throwIfNotSYSAdmin()
        tax.organizationID = ""
    } else {
        if (isArchived) {
            await throwIfInsufficientPerms(Permissions.admin.taxes.activate)
        } else {
            await throwIfInsufficientPerms(Permissions.admin.taxes.deactivate)
        }

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
        revalidatePath("/admin/taxes")
    } else {
        revalidatePath("/organization/admin/taxes")
    }
}