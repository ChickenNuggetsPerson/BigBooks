'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Decimal } from "@/database/generated/prisma/runtime/index-browser" // Same Decimal used by Prisma 
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"
import { PaystubFilters } from "../paystubFilters"



export default async function getPaystubTotals(identifier: PaystubFilters) {

    await throwIfInsufficientPerms(Permissions.employee.compensation.view)
    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)
    const session = await getSession()



    const result = await prisma.payStub.aggregate({
        _sum: {
            grossEarnings: true,
            totalTaxes: true,
            totalExtras: true,
            netPay: true
        },
        _count: {
            netPay: true
        },
        where: {
            ...identifier,
            ...{
                employee: {  // Ensures session has permissions
                    organizationId: session?.orgUUID ?? ""
                }
            }
        }
    })

    return serializeData({
        totalGross: result._sum.grossEarnings ?? new Decimal(0),
        totalTaxes: result._sum.totalTaxes ?? new Decimal(0),
        totalExtras: result._sum.totalExtras ?? new Decimal(0),
        totalNetPay: result._sum.netPay ?? new Decimal(0),
        count: result._count.netPay
    })
}