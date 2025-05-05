'use server'

import { getDispPayPeriod } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";



export default async function getPayperiodByUUID(uuid: string) {

    const period = await prisma.payperiod.findUnique({ where: { uuid: uuid } })
    if (period) {
        return getDispPayPeriod(period)
    }

    return undefined
}