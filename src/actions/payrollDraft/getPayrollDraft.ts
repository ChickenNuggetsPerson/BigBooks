'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { getOrgMembership, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { PayrollDraftWithEmployeesAndStubs } from "./types"



export default async function getPayrollDraft(draftUUID: string) : Promise<PayrollDraftWithEmployeesAndStubs | null> {

    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)
    const membership = await getOrgMembership()
    if (!membership) { throw new Error("Insufficient Permissions") }

    return await prisma.payrollDraft.findUnique({
        where: {
            uuid: draftUUID,
            membershipId: membership.uuid
        },
        include: {
            employees: {
                select: {
                    uuid: true,
                    firstName: true,
                    lastName: true
                }
            },
            paystubs: {
                select: {
                    uuid: true,
                    employee: {
                        select: {
                            uuid: true,
                            firstName: true,
                            lastName: true
                        }
                    }
                }
            }
        }
    })
}