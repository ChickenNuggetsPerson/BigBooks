'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Decimal } from "@/database/generated/prisma/runtime/index-browser" // Same Decimal used by Prisma 
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



interface IdentifierOptions {
    payrollItemId: string,
    compensationId: string,
    hourlyRateId: string,
    taxId: string
}
interface RangeOptions {
    payDateStart: Date,
    payDateEnd: Date
}

export default async function getPaystubItemLinkedTotals(
    identifier: Partial<IdentifierOptions>,
    timeRange?: Partial<RangeOptions>
) {

    await throwIfInsufficientPerms(Permissions.org.view)
    const session = await getSession()

    const result = await prisma.payStubItem.aggregate({
        _sum: {
            amount: true
        },
        _count: {
            amount: true
        },
        where: {...identifier, ...{
            payStub: {
                payDate: {
                    lte: timeRange?.payDateEnd,
                    gte: timeRange?.payDateStart
                },
                employee: {  // Ensures session has permissions
                    organizationId: session?.orgUUID ?? ""
                }
            }
        }}
    })
    
    return serializeData({
        total: result._sum.amount ?? new Decimal(0),
        count: result._count.amount
    })
}