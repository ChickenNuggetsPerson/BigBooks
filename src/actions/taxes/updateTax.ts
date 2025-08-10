'use server'

import { getSession, throwIfNotSYSAdmin } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { Tax } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache";



export default async function updateTax(tax: Tax) {

    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    // Check permissions and make sure orgUUID's arent messed with
    if (tax.sysAdminControlled) {
        await throwIfNotSYSAdmin()
        tax.organizationID = ""
    } else {
        await throwIfInsufficientPerms(Permissions.admin.taxes.edit)
        if (session.orgUUID !== tax.organizationID) {
            throw new Error("Unmatched OrgUUIDs")
        }
    }

    await prisma.tax.update({
        where: { uuid: tax.uuid },
        data: {
            name: tax.name,
            description: tax.description,
            state: tax.state
        }
    })

    if (tax.sysAdminControlled) {
        revalidatePath("/admin/taxes")
    } else {
        revalidatePath("/organization/admin/taxes")
    }

}