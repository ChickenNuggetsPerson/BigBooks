'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"




export default async function getPaystub(stubUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Viewer)

    return serializeData(await prisma.payStub.findUnique({
        where: { uuid: stubUUID },
        include: { items: true }
    }))
    
}