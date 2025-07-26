'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"





export default async function getOrgPayrollGroups() {
    
    await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.view)

    const session = await getSession()
    if (!session) { return [] }

    const groups = await prisma.payrollGroup.findMany({ 
        where: { organizationId: session.orgUUID },
        orderBy: [
            { name: "asc" }
        ]
    })
    return groups
}