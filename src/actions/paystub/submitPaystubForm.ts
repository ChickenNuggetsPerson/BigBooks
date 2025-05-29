'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { Prisma } from "@/database/generated/prisma"
import { DispPaystub } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"

// hourly: PaystubHourly[]
// salary: number
// commission: number
// bonus: number

// federalRate: number
// federalAmt: number
// stateRate: number
// stateAmt: number
// mediRate: number
// mediAmt: number
// socialRate: number
// socialAmt: number

// otherItems: PaystubExtra[]

// employeeUUID: string
// payperiodUUID: string

export default async function submitPaystubForm(newStub: DispPaystub) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    if (newStub.uuid == "") { // Create new

        await prisma.payStub.create({
            data: {
                hourly: newStub.hourly as unknown as Prisma.JsonArray,
                salary: newStub.salary,
                commission: newStub.commission,
                bonus: newStub.bonus,

                federalRate: newStub.federalRate,
                federalAmt: newStub.federalAmt,
                stateRate: newStub.stateRate,
                stateAmt: newStub.stateAmt,
                mediRate: newStub.mediRate,
                mediAmt: newStub.mediAmt,
                socialRate: newStub.socialRate,
                socialAmt: newStub.socialAmt,

                otherItems: newStub.otherItems as unknown as Prisma.JsonArray,

                employeeId: newStub.employeeUUID,
                payperiodId: newStub.payperiodUUID
            }
        })

    } else {

        await prisma.payStub.update({
            where: { uuid: newStub.uuid },
            data: {
                hourly: newStub.hourly as unknown as Prisma.JsonArray,
                salary: newStub.salary,
                commission: newStub.commission,
                bonus: newStub.bonus,

                federalRate: newStub.federalRate,
                federalAmt: newStub.federalAmt,
                stateRate: newStub.stateRate,
                stateAmt: newStub.stateAmt,
                mediRate: newStub.mediRate,
                mediAmt: newStub.mediAmt,
                socialRate: newStub.socialRate,
                socialAmt: newStub.socialAmt,

                otherItems: newStub.otherItems as unknown as Prisma.JsonArray,
            }
        })

    }
}