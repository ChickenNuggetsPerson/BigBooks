'use server'

import { getDispPaystub } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"




export default async function getPaystubById(stubID: string) {
    
    const stub = await prisma.payStub.findFirst({
        where: {
            uuid: stubID
        },
        include: { payperiod: true }
    })

    if (stub) {
        return getDispPaystub(stub, stub.payperiod)
    }

    return undefined
}