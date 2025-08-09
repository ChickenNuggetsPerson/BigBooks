"use server"

import { throwIfNotOrgAdmin } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { revalidatePath } from "next/cache"





export default async function makeOrgAdmin(orgUUID: string, userUUID: string) {
    
    await throwIfNotOrgAdmin()

    const m = await prisma.membership.findFirst({ where: { organizationId: orgUUID, userId: userUUID }})
    if (!m) {
        throw new Error("Invalid Parms")
    }

    const memebers = await prisma.membership.findMany({ where: { organizationId: orgUUID, orgAdmin: true } })
    for (let i = 0; i < memebers.length; i++) { // Clear org admins
        const member = memebers[i]
        await prisma.membership.updateMany({
            where: { organizationId: member.organizationId, userId: member.userId },
            data: {
                orgAdmin: false
            }
        })
        revalidatePath("/user/users/" + member.userId)
    }

    await prisma.membership.update({
        where: { uuid: m.uuid },
        data: {
            orgAdmin: true
        }
    })

    // Assign new org admin
    revalidatePath("/organization/admin/users")
    revalidatePath("/user/users/" + userUUID)
}