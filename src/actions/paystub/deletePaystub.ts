'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"





export default async function deletePaystub(stubUUID: string) {

    await redirectIfInvalidSession()
    
    await prisma.payStub.delete({where: { uuid: stubUUID }})
}