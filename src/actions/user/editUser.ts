'use server'

import { getSession, redirectIfInvalidSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { redirect } from "next/navigation"




export default async function editUser(formdata: FormData) {
    
    await redirectIfInvalidSession()
    const session = await getSession()
    if (!session) { throw new Error("") }

    const first = formdata.get("firstName") as string
    const last = formdata.get("lastName") as string
    const email = formdata.get("email") as string

    await prisma.user.update({
        where: { uuid: session.userID },
        data: {
            firstName: first,
            lastName: last,
            email: email
        }
    })

    redirect("/user")
}