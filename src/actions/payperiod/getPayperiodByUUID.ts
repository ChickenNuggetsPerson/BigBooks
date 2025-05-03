'use server'

import { getEM } from "@/database/db";
import { getDispPayPeriod } from "@/database/models/DisplayModels";
import { Payperiod } from "@/database/models/Models";
import { UUID } from "crypto";



export default async function getPayperiodByUUID(uuid: string) {

    const em = await getEM();
    const period = await em.findOne(Payperiod, { 
        uuid: (uuid as UUID)
    })
    if (period) {
        return getDispPayPeriod(period)
    }

    return undefined
}