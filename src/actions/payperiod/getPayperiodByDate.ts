'use server'

import { getEM } from "@/database/db";
import { getDispPayPeriod } from "@/database/models/DisplayModels";
import { Payperiod } from "@/database/models/Models";
import { UUID } from "crypto";
import createPayperiod from "./createPayperiod";



export default async function getPayperiodByDate(orgUUID: string, refDate: Date, createIfNULL: boolean) {

    const em = await getEM();
    const period = await em.findOne(Payperiod, { 
        periodStart: { $lte: refDate },
        periodEnd: { $gte: refDate },
        organization: {
            uuid: (orgUUID as UUID),
        }
    })
    if (period) {
        return getDispPayPeriod(period)
    }

    if (createIfNULL) {
        return await createPayperiod(orgUUID, refDate)
    }

    return undefined
}