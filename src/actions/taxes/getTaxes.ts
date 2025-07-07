'use server'

import { getSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { Prisma } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { SerializationResult, serializeData } from "@/utils/serialization";


type TaxWithSnapshots = Prisma.TaxGetPayload<{ include: { snapshots: { include: { brackets: true } } } }>

export default async function getTaxes(options: {
    organization?: boolean,
    system?: boolean
}): Promise<SerializationResult<TaxWithSnapshots[]>> {

    options.organization = options.organization ?? false
    options.system = options.system ?? false

    await throwIfInsufficientPerms(RoleTypes.Viewer) // You can view taxes regardless of permissions
    const session = await getSession()
    if (!session) { throw new Error("Invalid Session") }

    let taxes = [] as TaxWithSnapshots[]

    if (options.system) {
        taxes = await prisma.tax.findMany({
            where: { sysAdminControlled: true },
            include: { snapshots: { include: { brackets: true } } },
            orderBy: { name: "asc" }
        })
    }
    if (options.organization) {
        taxes = [...taxes, ...await prisma.tax.findMany({
            where: { sysAdminControlled: false, organizationID: session.orgUUID },
            include: { snapshots: { include: { brackets: true } } },
            orderBy: { name: "asc" }
        })]
    }

    return serializeData(taxes)
}