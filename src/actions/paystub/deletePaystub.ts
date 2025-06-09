'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"


export default async function deletePaystub(stubUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Editor)
    
    const stub = await prisma.payStub.findUniqueOrThrow({ where: { uuid: stubUUID } })
    if (stub.locked || stub.lockedTime || stub.submittedTime) {
        throw new Error("Paystub is locked")
    }

    await prisma.payStub.delete({
        where: { uuid: stub.uuid }
    })
}