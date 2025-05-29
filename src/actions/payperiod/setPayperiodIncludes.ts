'use server'

import { redirectIfInvalidSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache";



export default async function setPayperiodIncludes(periodUUID: string, includes: string[]) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    await prisma.payperiod.update({
        where: { uuid: periodUUID },
        data: {
            includedEmployees: includes
        }
    })

    revalidatePath("/organization/payroll")
}