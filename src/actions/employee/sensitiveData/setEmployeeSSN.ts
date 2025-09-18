'use server'

import { prisma } from "@/database/prisma"






export default async function setEmployeeSSN(employeeUUID: string, newSSN: string) {
    await prisma.employee.setSSN(employeeUUID, newSSN)
}