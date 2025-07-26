'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"





export default async function getEmployeeUnincludedGroups(employeeUUID: string) {
    await throwIfInsufficientPerms(Permissions.employee.compensation.view)

    const session = await getSession()
    if (!session) { return [] }

    const groups = await prisma.payrollGroup.findMany({
        where: {
            organizationId: session.orgUUID, 
            compensations: {
                none: {
                    employeeId: employeeUUID, // Only include groups where this employee is NOT compensated
                },
            },
        },
    })

    return groups
}