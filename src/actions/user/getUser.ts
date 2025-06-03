'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { prisma } from "@/database/prisma"




export default async function getUser(userUUID: string) { // TODO: figure out propper permissions of this

    await redirectIfInvalidSession()

    const user = await prisma.user.findUnique({
        where: {
            uuid: userUUID
        }, include: { memberships: true }
    })

    if (user) {
        user.passHash = ""
    }

    return user
}