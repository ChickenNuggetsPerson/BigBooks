'use server'

import { prisma } from "@/database/prisma"
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

    const filing = formData.get("filing") as string
    const dependants = Number(formData.get("dependants") as string)

    console.log(formData)

    try {

        if (mode == "salary") {
            await prisma.employee.update({
                where: { uuid: uuid },
                data: {
                    filingStatus: filing,
                    dependants: dependants,
                    isSalary: true,
                    salary: Number(formData.get("salary"))
                }
            })
        }

        if (mode == "hourly") {
            await prisma.employee.update({
                where: { uuid: uuid },
                data: {
                    filingStatus: filing,
                    dependants: dependants,
                    isSalary: false,
                    hourlyRates: getRateArray(formData)
                }
            })
        }

    } catch (err) { console.log(err) }

    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${uuid}`)
    redirect(`/organization/employee/${uuid}`)
}