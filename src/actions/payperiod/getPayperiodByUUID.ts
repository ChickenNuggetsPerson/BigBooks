'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { getDispPayPeriod } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";



export default async function getPayperiodByUUID(uuid: string) {

    await redirectIfInvalidSession()

    const period = await prisma.payperiod.findUnique({ where: { uuid: uuid } })
    if (period) {
        return getDispPayPeriod(period)
    }

    return undefined
}