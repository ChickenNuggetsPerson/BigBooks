'use server'

import { getEM } from "@/database/db"
import { Employee } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deleteEmployee(formData: FormData) {


    const empUUID = formData.get("uuid") as string

    try {

        const em = await getEM();

        const employee = await em.findOneOrFail(Employee, { uuid: (empUUID as UUID) })
        await em.removeAndFlush(employee)

    } catch(err) { console.log(err) }


    revalidatePath(`/organization/employee`)
    redirect(`/organization/employee`)

}