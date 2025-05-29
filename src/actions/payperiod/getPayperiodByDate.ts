'use server'

import { getDispPayPeriod, getEmptyDispPayPeriod } from "@/database/models/DisplayModels";
import createPayperiod from "./createPayperiod";
import { prisma } from "@/database/prisma";
import { redirectIfInvalidSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";



export default async function getPayperiodByDate(orgUUID: string, refDate: Date, createIfNULL: boolean) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    if (orgUUID.trim() == "") {
        return getEmptyDispPayPeriod()
    }

    const period = await prisma.payperiod.findFirst({
        where: {
            periodStart: { lte: refDate },
            periodEnd: { gte: refDate },
            organization: {
                uuid: orgUUID
            }
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