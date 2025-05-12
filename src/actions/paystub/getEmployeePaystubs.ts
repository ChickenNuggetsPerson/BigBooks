'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { getDispPaystub } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"







export default async function getEmployeePaystubs(empUUID: string) {

    await redirectIfInvalidSession()
    
    const stubs = await prisma.payStub.findMany({ where: { employeeId: empUUID }, include: { payperiod: true }})
    return stubs.map((stub) => getDispPaystub(stub, stub.payperiod))
}