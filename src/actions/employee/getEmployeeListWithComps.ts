'use server'

import { getSession, redirectIfInvalidSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"





// Make sure to derialize the result 
export default async function getEmployeeListWithComps() {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(Permissions.employee.personal.view)
    await throwIfInsufficientPerms(Permissions.employee.compensation.view)
    
    const session = await getSession()
    if (!session) { return serializeData([]) }

    const list = await prisma.employee.findMany({
        where: { organizationId: session.orgUUID, isDeleted: false },
        include: { compensations: true }
    })

    return serializeData(list)
}