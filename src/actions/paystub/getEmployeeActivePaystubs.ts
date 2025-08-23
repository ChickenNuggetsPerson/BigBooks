'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"
import getActivePayrollDraft from "../payrollDraft/getActivePayrollDraft"



// Returns a list of unlocked paystubs the employee has
export default async function getEmployeeActivePaystubs(empUUID: string, inPayrollDraft: boolean) {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)

    let stubs = []

    if (inPayrollDraft) {
        const draft = await getActivePayrollDraft()
        if (!draft) { return serializeData([]) }

        stubs = await prisma.payStub.findMany({
            where: {
                employeeId: empUUID,
                locked: false,
                relatedPayrollDraftId: draft.uuid
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
    } else {
        stubs = await prisma.payStub.findMany({
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
    }

    return serializeData(stubs)
}