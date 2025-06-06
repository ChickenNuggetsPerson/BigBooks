'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"





export default async function getEmployeeCompensations(empUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Viewer)

    const comps = await prisma.employeeCompensation.findMany({ 
        where: { employeeId: empUUID }, 
        include: { hourlyRates: true, payrollGroup: true }
    })
    
    return serializeData(comps)
}