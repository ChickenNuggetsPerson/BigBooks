'use server'

import { getEM } from "@/database/db"
import { generatePayperiodFromDate, getDispPayPeriod, getEmptyDispPayPeriod } from "@/database/models/DisplayModels"
import { Organization, Payperiod } from "@/database/models/Models"
import { UUID } from "crypto"





// refDate is a date within the payperiod
export default async function createPayperiod(orgUUID: string, refDate: Date) {

    const em = await getEM();

    const organization = await em.findOne(Organization, { uuid: (orgUUID as UUID) })
    if (!organization) {
        return getEmptyDispPayPeriod() // Cry
    }

    console.log("Creating Pay period")

    const current = generatePayperiodFromDate(organization.periodsRefDate, organization.periodsPerYear, refDate)

    const payperiod = new Payperiod()
    payperiod.organization = organization
    payperiod.uuid = crypto.randomUUID() as UUID

    payperiod.includedEmployees = []
    payperiod.periodStart = current.periodStart
    payperiod.periodEnd = current.periodEnd

    em.persist(payperiod);

    await em.flush();

    return getDispPayPeriod(payperiod)
}