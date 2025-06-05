'use server'

import { prisma } from "@/database/prisma"




export default async function getPaystubItems(paystubUUID: string) {

    // TODO: Handle permissions


    return await prisma.payStubItem.findMany({ where: { payStubId: paystubUUID } })
}