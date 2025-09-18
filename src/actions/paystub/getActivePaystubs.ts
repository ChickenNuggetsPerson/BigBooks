'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import getActivePayrollDraft from "../payrollDraft/getActivePayrollDraft"
import { PaystubUUIDWithEmployee } from "./types"




export default async function getActivePaystubs(useActiveDraft: boolean) : Promise<PaystubUUIDWithEmployee[]> {
    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)

    const session = await getSession()
    if (!session) {
        return []
    }

    if (useActiveDraft) {
        const draft = await getActivePayrollDraft()
        if (!draft) { return [] }
        const stubUUIDs = draft.paystubs.map(p => p.uuid)

        const stubs = await prisma.payStub.findMany({
            where: {
                locked: false,
                uuid: {
                    in: stubUUIDs
                }
            },
            select: {
                employee: true,
                uuid: true
            },
            orderBy: {
                employee: {
                    lastName: "asc"
                }
            }
        })

        return stubs
    } else {
        const stubs = await prisma.payStub.findMany({
            where: {
                locked: false,
                employee: {
                    organizationId: session.orgUUID
                }
            },
            select: {
                employee: true,
                uuid: true
            },
            orderBy: {
                employee: {
                    lastName: "asc"
                }
            }
        })

        return stubs
    }
}