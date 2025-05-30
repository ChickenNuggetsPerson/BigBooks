import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { redirect } from "next/navigation"





// Not a server action, should only be called by the server
export default async function getAllUsers() {

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }

    return await prisma.user.findMany()
}