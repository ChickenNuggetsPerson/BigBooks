'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { getDispPaystub } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"





export default async function getPaystubByPeriod(empUUID: string, periodUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)
    
    const stub = await prisma.payStub.findFirst({
        where: {
            employeeId: empUUID,
            payperiodId: periodUUID
        }
    })

    if (stub) {
        return getDispPaystub(stub, null)
    }

    return undefined
}