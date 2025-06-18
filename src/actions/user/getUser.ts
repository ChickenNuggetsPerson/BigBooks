'use server'

import { getSession,  } from "@/auth/auth"
import { prisma } from "@/database/prisma"




// Returns the user based on the UUID
export default async function getUser(userUUID: string) { 

    const session = await getSession()
    if (!session) { throw new Error("") }
    if (!session.isAdmin && session.userID !== userUUID) {
        throw new Error("Invalid Perms")
    }

    const user = await prisma.user.findUnique({
        where: {
            uuid: userUUID
        }, include: { memberships: true }
    })

    if (user) { // Stops the password hash from being passed around.
        user.passHash = ""
    }

    return user
}