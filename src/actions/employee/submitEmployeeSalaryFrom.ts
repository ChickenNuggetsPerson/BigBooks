'use server'

import { getEM } from "@/database/db"
import { Employee } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



function getRateArray(formData: FormData) {
    const arr = [] as { name: string, rate: number }[]
    let i = 0; 
    while (formData.has(i + "-name") && formData.has(i + "-rate")) {
        const newEntry = { name: formData.get(i + "-name") as string, rate: Number(formData.get(i + "-rate") as string)}
        if (newEntry.name != "") { 
            arr.push(newEntry)
        }
        i++
    }
    return arr
}

export default async function submitEmployeeSalaryForm(formData: FormData) {

    const uuid = formData.get("uuid") as string
    const mode = formData.get("isSalary") as string

    const em = await getEM();

    console.log(formData)

    try {
        const employee = await em.findOneOrFail(Employee, { uuid: (uuid as UUID) })

        if (mode == "salary") {
            employee.isSalary = true
            employee.salary = Number(formData.get("salary"))
        }

        if (mode == "hourly") {
            employee.isSalary = false
            employee.hourlyRates = getRateArray(formData)
        }

        await em.flush()

    } catch (err) { console.log(err) }

    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${uuid}`)
    redirect(`/organization/employee/${uuid}`)
}