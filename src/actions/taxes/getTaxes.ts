'use server'

import { getSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { TaxWithSnapshots } from "@/components/taxes/TaxEditForm";
import { prisma } from "@/database/prisma";
import { SerializationResult, serializeData } from "@/utils/serialization";



export default async function getTaxes(options: {
    organization?: boolean,
    system?: boolean,
    show?: "archived" | "active" | "all"
}): Promise<SerializationResult<TaxWithSnapshots[]>> {

    options.organization = options.organization ?? false
    options.system = options.system ?? false
    options.show = options.show ?? "active"

    await throwIfInsufficientPerms(Permissions.org.view) // You can view taxes regardless of permissions
    const session = await getSession()
    if (!session) { throw new Error("Invalid Session") }

    let taxes = [] as TaxWithSnapshots[]

    let showState = false as boolean | undefined // Default to show active taxes
    if (options.show == "all") {
        showState = undefined
    }
    if (options.show == "archived") {
        showState = true
    }


    if (options.system) {
        taxes = await prisma.tax.findMany({
            where: { sysAdminControlled: true, archived: showState },
            include: { snapshots: { include: { brackets: true, _count: { select: { paystubItems: true } } } } },
            orderBy: { name: "asc" }
        })
    }
    if (options.organization) {
        taxes = [...taxes, ...await prisma.tax.findMany({
            where: { sysAdminControlled: false, organizationID: session.orgUUID, archived: showState },
            include: { snapshots: { include: { brackets: true, _count: { select: { paystubItems: true } } } } },
            orderBy: { name: "asc" }
        })]
    }

    return serializeData(taxes)
}