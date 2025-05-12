'use server'

import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"






export default async function setUserActiveStatus(userID: string, status: boolean) {

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }

    await prisma.user.update({
        where: { uuid: userID},
        data: { isActive: status }
    })

    revalidatePath("/user/codes")
    redirect("/user/codes")
}