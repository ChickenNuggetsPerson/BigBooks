'use server'

import { getEM } from "@/database/db";
import { getDispPayPeriod } from "@/database/models/DisplayModels";
import { Organization } from "@/database/models/Models";
import { UUID } from "crypto";



export default async function getAllPayperiods(orgUUID: string) {

    const em = await getEM();
    const organization = await em.findOne(Organization, { uuid: (orgUUID as UUID) })

    if (!organization) {
        return []
    }

    const periods = await organization.payperiods.load()

    const newList = []
    for (let i = 0; i < periods.length; i++) {
        newList.push(await getDispPayPeriod(periods[i]))
    }

    newList.sort((s1, s2) => { return s2.periodStart.getTime() - s1.periodStart.getTime() })

    return newList
}