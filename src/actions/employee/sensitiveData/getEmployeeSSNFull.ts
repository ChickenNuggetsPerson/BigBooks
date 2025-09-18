'use server'

import { prisma } from "@/database/prisma"




export default async function getEmployeeSSNFull(employeeUUID: string) {
    return await prisma.employee.getSSNFull(employeeUUID)    
}