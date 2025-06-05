'use server'

import { PayStubItem } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { randomUUID } from "crypto"





export default async function upsertPaystubItem(paystubItem: PayStubItem) {

    // TODO: Handle permissions

    // Check to make sure the earnings object is configured correctly
    // Specifically the relations
    if (paystubItem.payStubId === null) { throw new Error("Not Linked to Paystub") }

    if (paystubItem.payStubId) {
        await prisma.payStub.findUniqueOrThrow({ where: { uuid: paystubItem.payStubId } })
    }

    const currentEearning = await prisma.payStubItem.findUnique({ where: { uuid: paystubItem.uuid } })
    if (!currentEearning) {
        paystubItem.uuid = randomUUID()
    }

    await prisma.payStubItem.upsert({
        where: { uuid: paystubItem.uuid },
        create: paystubItem,
        update: paystubItem
    })
}