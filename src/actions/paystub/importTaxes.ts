'use server'

import { getSession } from "@/auth/auth"
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"
import { calcTaxRates } from "@/utils/taxes/calcTaxRates"





export default async function genEmployeeTaxRates(empUUID: string, orgUUID: string, payDate: Date) {

    await throwIfInsufficientPerms(Permissions.employee.tax.view)
    const session = await getSession()
    if (!session) { throw new Error("") }

    if (session.orgUUID !== orgUUID) { throw new Error("Invalid Context") }

    const org = await prisma.organization.findUniqueOrThrow({ where: { uuid: orgUUID }})

    const employee = await prisma.employee.findUniqueOrThrow({
        where: {
            uuid: empUUID,
            organizationId: org.uuid
        },
        include: { compensations: { include: { hourlyRates: true } } }
    })
    const rates = await calcTaxRates(employee, org, payDate)
    return serializeData(rates)
}