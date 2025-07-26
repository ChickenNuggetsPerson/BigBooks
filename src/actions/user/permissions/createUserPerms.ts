'use server'

import { redirectIfInvalidSession, throwIfNotSYSAdmin } from "@/auth/auth"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"





// Only runs in sys admin
export default async function createUserPerms(userUUID: string, orgUUID: string, perms: string[]) {
    await redirectIfInvalidSession()
    await throwIfNotSYSAdmin()

    // Verify user and org exists
    const user = await prisma.user.findUnique({ where: { uuid: userUUID } })
    const org = await prisma.organization.findUnique({ where: { uuid: orgUUID } })

    if (!user || !org || perms.length == 0) { throw new Error("Invalid Parms") }

    const m = await prisma.membership.findFirst({ where: { userId: userUUID, organizationId: orgUUID }})
    if (m) {
        throw new Error("Membership Already exists for organization")
    }

    // Create role in database
    await prisma.membership.create({
        data: {
            userId: user.uuid,
            organizationId: org.uuid,
            permissions: perms
        }
    })

    // TODO: Updte sysadmin paths
    revalidatePath("/user/users/" + user.uuid)
}