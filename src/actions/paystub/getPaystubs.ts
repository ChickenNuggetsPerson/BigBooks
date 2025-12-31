"use server"

import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { PaystubFilters } from "./paystubFilters";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { prisma } from "@/database/prisma";
import { getSession } from "@/auth/auth";
import { serializeData } from "@/utils/serialization";


export default async function getPaystubs(identifiers: PaystubFilters) {

    const session = await getSession()
    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)

    const paystubs = await prisma.payStub.findMany({
        where: {
            ...identifiers,
            ...{
                employee: {
                    organizationId: session?.orgUUID ?? ""
                }
            }
        },
        include: {
            employee: {
                select: {
                    firstName: true,
                    lastName: true
                }
            }
        }
    })

    return serializeData(paystubs)
}