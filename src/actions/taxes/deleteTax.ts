'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"



export default async function deleteTax(taxUUID: string) {

    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    const tax = await prisma.tax.findUnique({
        where: { uuid: taxUUID },
        include: {
            snapshots: true
        }
    })
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

    for (let i = 0; i < tax.snapshots.length; i++) {
        const snapshot = tax.snapshots[i]
        const count = await prisma.payStubItem.count({ where: { taxID: snapshot.uuid }})
        if (count > 0) {
            throw new Error("Tax is linked to paystubs")
        }
    }

    if (tax.sysAdminControlled) {
        // TODO: Add sysadmin tax path 
    } else {
        revalidatePath("/organization/admin/taxes")
    }
}