'use server'

import { getSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { redirect } from "next/navigation"






export default async function getRegistrationCodes() {

    const session = await getSession()
    if (!session) { redirect("/user/login") }

    if (!session.isAdmin) { return }

    const codes = await prisma.registrationCode.findMany()
    return codes.map((code) => { return { code: code.uuid, expires: code.expires } })
}