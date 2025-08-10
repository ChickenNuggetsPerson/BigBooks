'use server'

import { getSession, throwIfNotSYSAdmin } from "@/auth/auth";
import { Tax } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { deserializeData, SerializationResult } from "@/utils/serialization";
import { revalidatePath } from "next/cache";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { Permissions } from "@/auth/permissions/PermissionsDef";



export default async function createTax(data: SerializationResult<Tax>) {
    const tax = deserializeData(data)

    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    // Check permissions and make sure orgUUID's arent messed with
    if (tax.sysAdminControlled) {
        await throwIfNotSYSAdmin()
        tax.organizationID = ""
    } else {
        await throwIfInsufficientPerms(Permissions.admin.taxes.create)
        if (session.orgUUID !== tax.organizationID) {
            throw new Error("Unmatched OrgUUIDs")
        }
    }

    if (tax.sysAdminControlled) {
        await prisma.tax.create({
            data: {
                sysAdminControlled: tax.sysAdminControlled,
                name: tax.name,
                description: tax.description,
                state: tax.state
            }
        })
    } else {
        await prisma.tax.create({
            data: {
                sysAdminControlled: tax.sysAdminControlled,
                organizationID: tax.organizationID,
                name: tax.name,
                description: tax.description,
                state: tax.state
            }
        })
    }

    if (tax.sysAdminControlled) {
        revalidatePath("/admin/taxes")
    } else {
        revalidatePath("/organization/admin/taxes")
    }

}