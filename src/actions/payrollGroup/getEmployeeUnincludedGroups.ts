'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"





export default async function getEmployeeUnincludedGroups(employeeUUID: string) {
    await throwIfInsufficientPerms(RoleTypes.Editor)

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