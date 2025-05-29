'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { getDispPaystub } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"







export default async function getEmployeePaystubs(empUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)
    
    const stubs = await prisma.payStub.findMany({ where: { employeeId: empUUID }, include: { payperiod: true }})
    return stubs.map((stub) => getDispPaystub(stub, stub.payperiod))
}