'use server'

import { prisma } from "@/database/prisma"



export default async function deletePayrollItem(itemUUID: string) {

    // TODO: Figure out auth and checks

    await prisma.payrollItem.delete({ where: { uuid: itemUUID } })
    
}