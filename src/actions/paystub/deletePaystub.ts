'use server'

import { prisma } from "@/database/prisma"








export default async function deletePaystub(stubUUID: string) {
    await prisma.payStub.delete({where: { uuid: stubUUID }})
}