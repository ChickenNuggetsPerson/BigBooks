'use server'


import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



export default async function getEmployeePaystubs(uuid: string) {    
    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)    

    return serializeData(await prisma.payStub.findMany({ where: { employeeId: uuid } }))
    
}