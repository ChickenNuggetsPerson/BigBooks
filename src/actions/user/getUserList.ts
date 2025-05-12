'use server'

import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { redirect } from "next/navigation"






export default async function getUserList() {

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }

    return await prisma.user.findMany()
}