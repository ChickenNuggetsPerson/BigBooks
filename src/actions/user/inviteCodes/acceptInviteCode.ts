'use server'

import { getUserFromSession } from "@/auth/auth"
import { getOrgMembership } from "@/auth/permissions/PermissionsFunctions"
import { prisma } from "@/database/prisma"
import { redirect } from "next/navigation"




export default async function acceptInviteCode(codeID: string) {

    const user = await getUserFromSession()
    if (!user) {
        redirect("/user/login")
    }

    const code = await prisma.inviteCode.findUnique({ where: { uuid: codeID } })

    if (!code) {
        return { message: "Code does not exist", success: false }
    }
    if (new Date() > code.expires) {
        await prisma.inviteCode.delete({ where: { uuid: code.uuid } })
        return { message: "Code is expired", success: false }
    }

    const currentMembership = await getOrgMembership(code.organizationId)
    if (currentMembership) {
        await prisma.inviteCode.delete({ where: { uuid: code.uuid } })
        return { message: "You already belong to this organization", success: false }
    }

    await prisma.membership.create({ // Create the role
        data: {
            userId: user.uuid,
            organizationId: code.organizationId,
            permissions: code.perms
        }
    })


    await prisma.inviteCode.delete({ where: { uuid: code.uuid } })

    return { message: "Invite accepted", success: true }
}