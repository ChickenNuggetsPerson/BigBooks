'use server'

import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"







export default async function deleteRegistrationCode(code: string) {
    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }


    await prisma.registrationCode.delete({ where: { uuid: code } })

    revalidatePath("/user/codes")
    redirect("/user/codes")
}