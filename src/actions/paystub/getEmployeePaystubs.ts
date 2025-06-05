'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"



export default async function getEmployeePaystubs(uuid: string) {
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    return await prisma.payStub.findMany({ where: { employeeId: uuid } })
    
}