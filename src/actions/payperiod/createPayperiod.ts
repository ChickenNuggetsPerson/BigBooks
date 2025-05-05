'use server'

import { generatePayperiodFromDate, getDispPayPeriod, getEmptyDispPayPeriod } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache"





// refDate is a date within the payperiod
export default async function createPayperiod(orgUUID: string, refDate: Date) {

    const organization = await prisma.organization.findUnique({ where: { uuid: orgUUID }})
    if (!organization) {
        return getEmptyDispPayPeriod() // Cry
    }

    console.log("Creating Pay period")

    const current = generatePayperiodFromDate(organization.periodsRefDate, organization.periodsPerYear, refDate)

    const payperiod = await prisma.payperiod.create({
        data: {
            includedEmployees: [],
            periodStart: current.periodStart,
            periodEnd: current.periodEnd,
            organizationId: organization.uuid
        }
    })

    revalidatePath("/organization/payroll")
    return getDispPayPeriod(payperiod)
}