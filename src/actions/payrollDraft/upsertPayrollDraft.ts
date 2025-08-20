'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef";
import { getOrgMembership, throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";
import { PayrollDraftWithEmployees } from "./types";
import updateActivePayrollDraft from "./updateActivePayrollDraft";
import { getSetDifference } from "@/utils/functions/Sets";




export default async function upsertPayrollDraft(draft: PayrollDraftWithEmployees) {
    
    await throwIfInsufficientPerms(Permissions.payroll.paystub.edit)

    const membership = await getOrgMembership()
    if (!membership) { throw new Error("Insufficient Permissions") }

    const dbDraft = await prisma.payrollDraft.findUnique({
        where: {
            uuid: draft.uuid,
            membershipId: membership.uuid
        },
        include: {
            employees: {
                select: {
                    uuid: true
                }
            }
        }
    })

    if (dbDraft) { // Update the draft

        const dbEmps = new Set(dbDraft.employees.map(e => e.uuid))
        const newEmps = new Set(draft.employees.map(e => e.uuid))

        console.log(dbEmps, newEmps)

        const removed = getSetDifference(dbEmps, newEmps)
        const added =  getSetDifference(newEmps, dbEmps)

        await prisma.payrollDraft.update({
            where: {
                uuid: dbDraft.uuid
            },
            data: {
                periodStart: draft.periodStart,
                periodEnd: draft.periodEnd,
                periodPaydate: draft.periodPaydate,
                employees: {
                    connect: [...added].map(a => {
                        return { uuid: a }
                    }),
                    disconnect: [...removed].map(a => {
                        return { uuid: a }
                    })
                }
            }
        })

    } else { // New Draft

        const newDraft = await prisma.payrollDraft.create({
            data: {
                membershipId: membership.uuid,
                periodStart: draft.periodStart,
                periodEnd: draft.periodEnd,
                periodPaydate: draft.periodPaydate,
                employees: {
                    connect: draft.employees.map(emp => { return { uuid: emp.uuid } })
                }
            }
        })

        await updateActivePayrollDraft(newDraft.uuid)
    }
}