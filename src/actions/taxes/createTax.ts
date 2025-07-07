'use server'

import { getSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { Tax } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { deserializeData, SerializationResult } from "@/utils/serialization";
import { revalidatePath } from "next/cache";



export default async function createTax(data: SerializationResult<Tax>) {
    const tax = deserializeData(data)
    
    const session = await getSession()
    if (!session) {
        throw new Error("Invalid Session")
    }

    // Check permissions and make sure orgUUID's arent messed with
    if (tax.sysAdminControlled) {
        await throwIfInsufficientPerms(RoleTypes.SysAdmin)
        tax.organizationID = "" // Org
    } else {
        await throwIfInsufficientPerms(RoleTypes.Admin)
        console.log(session.orgUUID, tax.organizationID)
        if (session.orgUUID !== tax.organizationID) {
            throw new Error("Unmatched OrgUUIDs")
        }
    }

    await prisma.tax.create({
        data: {
            sysAdminControlled: tax.sysAdminControlled,
            organizationID: tax.organizationID,
            name: tax.name,
            description: tax.description
        }
    })

    if (tax.sysAdminControlled) {
        // TODO: Add sysadmin tax path 
    } else {
        revalidatePath("/organization/admin/taxes")
    }

}