'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { SerializationResult, serializeData } from "@/utils/serialization"
import getActivePayrollDraft from "../payrollDraft/getActivePayrollDraft"
import { PaystubUUIDWithEmployee } from "./types"




export default async function getActivePaystubs(useActiveDraft: boolean) : Promise<SerializationResult<PaystubUUIDWithEmployee[]>> {
    await throwIfInsufficientPerms(Permissions.payroll.paystub.view)

    const session = await getSession()
    if (!session) {
        return serializeData([])
    }

    if (useActiveDraft) {
        const draft = await getActivePayrollDraft()
        if (!draft) { return serializeData([]) }
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

        return serializeData(stubs)
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

        return serializeData(stubs)
    }
}