'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"





export default async function deletePaystub(stubUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)
    
    await prisma.payStub.delete({where: { uuid: stubUUID }})
}