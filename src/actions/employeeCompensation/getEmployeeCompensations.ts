'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"





export default async function getEmployeeCompensations(empUUID: string) {

    await throwIfInsufficientPerms(Permissions.employee.compensation.view)

    const comps = await prisma.employeeCompensation.findMany({ 
        where: { employeeId: empUUID }, 
        include: { hourlyRates: true, payrollGroup: true }
    })
    
    return serializeData(comps)
}