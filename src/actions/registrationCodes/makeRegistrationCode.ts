'use server'

import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { addDays } from "@/utils/functions/Date"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"








export default async function makeRegistrationCode() {

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }

    const expires = addDays(new Date(), 2) // Code lasts for 2 days

    await prisma.registrationCode.create({ data: { expires: expires } })

    revalidatePath("/user/users")
    redirect("/user/users")
}