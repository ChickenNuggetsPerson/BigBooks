'use server'

import { prisma } from "@/database/prisma"
import deletePaystub from "./deletePaystub"
import setPayperiodIncludes from "../payperiod/setPayperiodIncludes"
import { redirectIfInvalidSession } from "@/auth/auth"




export default async function deleteAndDeselectPaystub(stubUUID: string, periodUUID: string, empUUID: string) {

    await redirectIfInvalidSession()
    
    const period = await prisma.payperiod.findUniqueOrThrow({ where: { uuid: periodUUID }})
    const includes = period.includedEmployees as string[]

    await setPayperiodIncludes(periodUUID, includes.filter((include) => include != empUUID)) // Filter out the employee ID
    await deletePaystub(stubUUID)
}