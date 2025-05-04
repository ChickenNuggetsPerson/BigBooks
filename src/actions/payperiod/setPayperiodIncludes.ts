'use server'

import { getEM } from "@/database/db"
import { Payperiod } from "@/database/models/Models";
import { UUID } from "crypto";
import { revalidatePath } from "next/cache";








export default async function setPayperiodIncludes(periodUUID: string, includes: string[]) {


    const em = await getEM();
    const period = await em.findOne(Payperiod, {
        uuid: (periodUUID as UUID)
    })
    if (!period) {
        return
    }

    period.includedEmployees = includes as UUID[]

    revalidatePath("/organization/payroll")
}