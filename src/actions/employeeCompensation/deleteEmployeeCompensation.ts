'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"







export default async function deleteEmployeeCompensation(compUUID: string) {

    await throwIfInsufficientPerms(Permissions.employee.compensation.edit)
    const session = await getSession()
    if (!session) { return }

    await prisma.hourlyRate.deleteMany({ where: { compensationId: compUUID } })
    await prisma.employeeCompensation.delete({ where: { uuid: compUUID } })
}