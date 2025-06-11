'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { addDays } from "@/utils/functions/Date"
import { serializeData } from "@/utils/serialization"



export default async function getEmployeeLatestPaystub(empUUID: string, payDate: Date) {

    await throwIfInsufficientPerms(RoleTypes.Editor)

    const stub = await prisma.payStub.findFirst({
        where: {
            employeeId: empUUID,
            payDate: {
                gte: addDays(payDate, -5)
            }
        },
        include: {
            items: true
        },
        orderBy: [
            {
                payDate: "desc"
            }
        ]
    })

    // if (stub) {
    //     if (stub.submittedTime) { // If the stub is submitted, return null 
    //         return serializeData(null)
    //     }
    // }

    return serializeData(stub)
}