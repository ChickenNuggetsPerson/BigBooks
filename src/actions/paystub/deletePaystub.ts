'use server'


import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"


export default async function deletePaystub(stubUUID: string) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.del)
    
    const stub = await prisma.payStub.findUniqueOrThrow({ where: { uuid: stubUUID } })
    if (stub.locked || stub.lockedTime || stub.submittedTime) {
        throw new Error("Paystub is locked")
    }

    await prisma.payStub.delete({
        where: { uuid: stub.uuid }
    })
}