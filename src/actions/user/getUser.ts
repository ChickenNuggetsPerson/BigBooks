'use server'

import { redirectIfInvalidSession } from "@/auth/auth"
import { getDispUser, getEmptyDispUser } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"




export default async function getUser(userUUID: string) {

    await redirectIfInvalidSession()

    const user = await prisma.user.findUnique({
        where: {
            uuid: userUUID
        }
    })

    if (user) {
        return getDispUser(user)
    } else {
        return getEmptyDispUser()
    }
}