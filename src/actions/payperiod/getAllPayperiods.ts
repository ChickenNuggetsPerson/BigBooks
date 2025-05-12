'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { getDispPayPeriod } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";



export default async function getAllPayperiods(orgUUID: string) {
    
    await redirectIfInvalidSession()

    const periods = await prisma.payperiod.findMany({ where: { organizationId: orgUUID }})

    const newList = []
    for (let i = 0; i < periods.length; i++) {
        newList.push(await getDispPayPeriod(periods[i]))
    }

    newList.sort((s1, s2) => { return s2.periodStart.getTime() - s1.periodStart.getTime() })

    return newList
}