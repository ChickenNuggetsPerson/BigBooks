'use server'

import { prisma } from "@/database/prisma"



export default async function deletePaystubItem(itemUUID: string) {

    // TODO: Figure out auth and checks

    await prisma.payStubItem.delete({ where: { uuid: itemUUID } })
    
}