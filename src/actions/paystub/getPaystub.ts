'use server'


import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"




export default async function getPaystub(stubUUID: string) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)

    return serializeData(await prisma.payStub.findUnique({
        where: { uuid: stubUUID },
        include: { items: true }
    }))
    
}