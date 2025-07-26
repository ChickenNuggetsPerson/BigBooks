'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"




export default async function unlockPaystub(stubUUID: string) {
    
    await throwIfInsufficientPerms(Permissions.payroll.paystub.unlock)

    const stub = await prisma.payStub.findUniqueOrThrow({ where: { uuid: stubUUID } })
    await prisma.payStub.update({
        where: { uuid: stub.uuid },
        data: {
            locked: false
        }
    })
}