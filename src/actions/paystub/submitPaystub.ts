'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"




export default async function submitPaystub(stubUUID: string) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.lock)
    await throwIfInsufficientPerms(Permissions.payroll.paystub.submit)

    const session = await getSession()
    if (!session) { throw new Error("No Session") }
    
    const s = await prisma.payStub.findUnique({
        where: { uuid: stubUUID },
        select: {
            employee: true
        }
    })
    if (!s) { throw new Error("Stub Does Not Exist") }
    if (s.employee.organizationId !== session.orgUUID) { throw new Error("Not Enough Permissions") }


    // TODO: Send to payment system? 

    await prisma.payStub.update({
        where: { uuid: stubUUID },
        data: {
            locked: true,
            lockedTime: new Date(),
            submittedTime: new Date()
        }
    })
}
