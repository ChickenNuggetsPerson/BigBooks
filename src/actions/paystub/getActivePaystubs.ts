'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"




export default async function getActivePaystubs() {
    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)    

    const session = await getSession()
    if (!session) {
        return serializeData([])
    }

    const stubs = await prisma.payStub.findMany({ 
        where: { 
            locked: false,
            // lockedTime: null,
            // submittedTime: null,
            employee: {
                organizationId: session.orgUUID
            }
        },
        select: {
            employee: true,
            uuid: true
        },
        orderBy: {
            employee: {
                lastName: "asc"
            }
        }
    })

    return serializeData(stubs)
}