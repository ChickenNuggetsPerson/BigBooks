'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



// Returns a list of unlocked paystubs the employee has
export default async function getEmployeeActivePaystubs(empUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Editor)

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