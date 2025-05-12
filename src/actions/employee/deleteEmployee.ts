'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deleteEmployee(formData: FormData) {

    await redirectIfInvalidSession()

    const empUUID = formData.get("uuid") as string

    try {
        await prisma.employee.delete({ where: { uuid: empUUID }})
    } catch(err) { console.log(err) }


    revalidatePath(`/organization/employee`)
    redirect(`/organization/employee`)

}