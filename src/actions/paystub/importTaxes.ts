'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"
import { calcTaxRates } from "@/utils/taxes/calcTaxRates"





export default async function genEmployeeTaxRates(empUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Editor)
    const session = await getSession()
    if (!session) { throw new Error("") }

    const employee = await prisma.employee.findUniqueOrThrow({
        where: {
            uuid: empUUID,
            organizationId: session.orgUUID
        }
    })
    const rates = calcTaxRates(employee)
    return serializeData(rates)
}