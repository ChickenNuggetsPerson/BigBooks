'use server'

import { loginUser, registerUser } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



// Does not need to be authenticated

export default async function createUser(formdata: FormData) {

    const username = formdata.get("username") as string
    const password = formdata.get("password") as string
    const code = formdata.get("code") as string


    const registrationCode = await prisma.registrationCode.findUnique({ where: { uuid: code }})
    if (!registrationCode) { return }

    if (new Date() > registrationCode.expires) {
        await prisma.registrationCode.delete({ where: { uuid: code }}) // Delete the code if it is expired
        return
    }

    try {
        await registerUser(username, password)
        await loginUser(username, password)
    } catch(err) {
        console.error(err)
        redirect("/")
    }

    await prisma.registrationCode.delete({ where: { uuid: code }}) // Delete Code after use

    revalidatePath("/user/edit")
    redirect("/user/edit")
}