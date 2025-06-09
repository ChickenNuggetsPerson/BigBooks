'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { FilingTypes } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"



export default async function submitEmployeeSalaryForm(formData: FormData) {

    await redirectIfInvalidSession()
    await throwIfInsufficientPerms(RoleTypes.Editor)

    const uuid = formData.get("uuid") as string

    const filing = formData.get("filing") as FilingTypes
    const dependants = Number(formData.get("dependants") as string)

    await prisma.employee.update({
        where: { uuid: uuid },
        data: {
            filingStatus: filing,
            dependants: dependants
        }
    })

    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${uuid}`)

    return uuid
}