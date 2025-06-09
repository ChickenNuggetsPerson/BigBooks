'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



export default async function getEmployeeLatestPaystub(empUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Editor)

    const stub = await prisma.payStub.findFirst({
        where: {
            employeeId: empUUID
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

    if (stub) {
        if (stub.submittedTime) { // If the stub is submitted, return null 
            return serializeData(null)
        }
    }

    return serializeData(stub)
}