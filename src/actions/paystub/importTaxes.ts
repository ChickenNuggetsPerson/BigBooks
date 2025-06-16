'use server'

import { getSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"
import { calcTaxRates } from "@/utils/taxes/calcTaxRates"





export default async function genEmployeeTaxRates(empUUID: string, orgUUID: string, payDate: Date) {

    await throwIfInsufficientPerms(RoleTypes.Editor)
    const session = await getSession()
    if (!session) { throw new Error("") }

    if (session.orgUUID !== orgUUID) { throw new Error("Invalid Context") }

    const org = await prisma.organization.findUniqueOrThrow({ where: { uuid: orgUUID }})

    const employee = await prisma.employee.findUniqueOrThrow({
        where: {
            uuid: empUUID,
            organizationId: org.uuid
        }
    })
    const rates = calcTaxRates(employee, org, payDate)
    return serializeData(rates)
}