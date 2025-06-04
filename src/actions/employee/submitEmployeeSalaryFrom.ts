'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



// function getRateArray(formData: FormData) {
//     const arr = [] as { name: string, rate: number }[]
//     let i = 0; 
//     while (formData.has(i + "-name") && formData.has(i + "-rate")) {
//         const newEntry = { name: formData.get(i + "-name") as string, rate: Number(formData.get(i + "-rate") as string)}
//         if (newEntry.name != "") { 
//             arr.push(newEntry)
//         }
//         i++
//     }
//     return arr
// }

export default async function submitEmployeeSalaryForm(formData: FormData) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    const uuid = formData.get("uuid") as string

    const filing = formData.get("filing") as string
    const dependants = Number(formData.get("dependants") as string)

    // console.log(formData)

    try {

        await prisma.employee.update({
            where: { uuid: uuid },
            data: {
                filingStatus: filing,
                dependants: dependants
            }
        })

    } catch (err) { console.log(err) }

    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${uuid}`)
    redirect(`/organization/employee/${uuid}`)
}