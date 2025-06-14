'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



export default async function getEmployeePaystubs(uuid: string) {
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    return serializeData(await prisma.payStub.findMany({ where: { employeeId: uuid } }))
    
}