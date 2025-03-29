'use server'

import { getEM } from "@/database/db"
import { Employee } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deactivateEmployee(empUUID: string, deactivate: boolean) {


    try {

        const em = await getEM();

        const employee = await em.findOneOrFail(Employee, { uuid: (empUUID as UUID) })
        employee.isDeleted = deactivate

        await em.flush()

    } catch(err) { console.log(err) }


    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${empUUID}`)
    redirect(`/organization/employee/${empUUID}`)

}