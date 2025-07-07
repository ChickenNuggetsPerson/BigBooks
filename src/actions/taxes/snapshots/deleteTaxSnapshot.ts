'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"



// Takes in the tax snapshot and the related brackets
export default async function deleteTaxSnapshot(snapshotUUID: string) {

    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    const snapshot = await prisma.taxSnapshot.findUnique({
        where: { uuid: snapshotUUID },
        include: {
            tax: true,
            _count: {
                select: { paystubItems: true }
            }
        }
    })
    if (!snapshot) { throw new Error("Invalid tax ID") }

    // Check permissions and make sure orgUUID's arent messed with
    if (snapshot.tax.sysAdminControlled) {
        await throwIfInsufficientPerms(RoleTypes.SysAdmin)
    } else {
        await throwIfInsufficientPerms(RoleTypes.Admin)
        if (session.orgUUID !== snapshot.tax.organizationID) {
            throw new Error("Unmatched OrgUUIDs")
        }
    }

    if (snapshot._count.paystubItems > 0) {
        throw new Error("Snapshot it used in paystubs")
    }
    await prisma.taxSnapshot.delete({ where: { uuid: snapshotUUID } })

    if (snapshot.tax.sysAdminControlled) {
        // TODO: Add sysadmin tax path 
        revalidatePath("/user/taxes")
    } else {
        revalidatePath("/organization/admin/taxes")
    }

}