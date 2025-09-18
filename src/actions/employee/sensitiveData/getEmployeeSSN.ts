'use server'

import { prisma } from "@/database/prisma"




export default async function getEmployeeSSN(employeeUUID: string) {
    return await prisma.employee.getSSN(employeeUUID)    
}