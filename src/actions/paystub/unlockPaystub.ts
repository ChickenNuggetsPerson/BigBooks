'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"




export default async function unlockPaystub(stubUUID: string) {
    
    await throwIfInsufficientPerms(RoleTypes.Admin)

    const stub = await prisma.payStub.findUniqueOrThrow({ where: { uuid: stubUUID } })
    await prisma.payStub.update({
        where: { uuid: stub.uuid },
        data: {
            locked: false
        }
    })
}