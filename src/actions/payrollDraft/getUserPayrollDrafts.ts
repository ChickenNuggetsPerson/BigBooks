'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { PayrollDraftWithCount } from "./types"




export default async function getUserPayrollDrafts() : Promise<PayrollDraftWithCount[]> {
    
    
    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)

    const membership = await getOrgMembership()
    if (!membership) { throw new Error("Insufficient Permissions") }

    return await prisma.payrollDraft.findMany({
        where: { membershipId: membership.uuid },
        include: {
            _count: {
                select: {
                    employees: true
                }
            }
        },
        orderBy: {
            periodPaydate: "desc"
        }
    })
}