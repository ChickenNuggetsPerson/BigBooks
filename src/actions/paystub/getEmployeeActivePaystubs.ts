'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



// Returns a list of unlocked paystubs the employee has
export default async function getEmployeeActivePaystubs(empUUID: string) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)    

    const stub = await prisma.payStub.findMany({
        where: {
            employeeId: empUUID,
            locked: false
        },
        select: {
            uuid: true,
            payDate: true,
            periodStart: true,
            periodEnd: true
        },
        orderBy: [
            {
                payDate: "desc"
            }
        ]
    })

    return serializeData(stub)
}