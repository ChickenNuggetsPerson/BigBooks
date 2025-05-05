'use server'

import { getDispPaystub } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"





export default async function getPaystub(empUUID: string, periodUUID: string) {
    
    const stub = await prisma.payStub.findFirst({
        where: {
            employeeId: empUUID,
            payperiodId: periodUUID
        }
    })

    if (stub) {
        return getDispPaystub(stub)
    }

    return undefined
}