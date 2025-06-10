'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"




export default async function getActivePaystubs() {
    await throwIfInsufficientPerms(RoleTypes.Editor)    

    const session = await getSession()
    if (!session) {
        return serializeData([])
    }

    const stubs = await prisma.payStub.findMany({ 
        where: { 
            locked: false,
            lockedTime: null,
            submittedTime: null,
            employee: {
                organizationId: session.orgUUID
            }
        },
        include: {
            employee: true
        },
        orderBy: {
            employee: {
                lastName: "asc"
            }
        }
    })

    return serializeData(stubs)
}