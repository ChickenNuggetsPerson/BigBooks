'use server'

import { prisma } from "@/database/prisma"
import deletePaystub from "./deletePaystub"
import setPayperiodIncludes from "../payperiod/setPayperiodIncludes"
import { redirectIfInvalidSession } from "@/auth/auth"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { RoleTypes } from "@/auth/roles/Roles"




export default async function deleteAndDeselectPaystub(stubUUID: string, periodUUID: string, empUUID: string) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)
    
    const period = await prisma.payperiod.findUniqueOrThrow({ where: { uuid: periodUUID }})
    const includes = period.includedEmployees as string[]

    await setPayperiodIncludes(periodUUID, includes.filter((include) => include != empUUID)) // Filter out the employee ID
    await deletePaystub(stubUUID)
}