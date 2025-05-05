'use server'

import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function deactivateEmployee(empUUID: string, deactivate: boolean) {


    try {

        // Update the isDeleted flag
        await prisma.employee.update({
            where: { uuid: empUUID }, 
            data: {
                isDeleted: deactivate,
            },
        });

    } catch (err) { console.log(err) }


    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${empUUID}`)
    redirect(`/organization/employee/${empUUID}`)

}