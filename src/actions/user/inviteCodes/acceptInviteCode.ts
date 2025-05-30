'use server'

import { getUserFromSession } from "@/auth/auth"
import getOrgRole from "@/auth/roles/getOrgRole"
import { getRoleFromID, RoleTypes } from "@/auth/roles/Roles"
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

    const currentRole = await getOrgRole(code.organizationId)
    if (currentRole.level >= getRoleFromID(code.role).level) {
        await prisma.inviteCode.delete({ where: { uuid: code.uuid } })
        return { message: "You already have these permissions", success: false }
    }

    if (currentRole.type == RoleTypes.Error) { // They are not a part of the organization

        await prisma.role.create({ // Create the role
            data: {
                userId: user.uuid,
                organizationId: code.organizationId,
                role: code.role
            }
        })

    } else {

        await prisma.role.updateMany({ // Otherwise update the stored role
            where: {
                userId: user.uuid,
                organizationId: code.organizationId
            },
            data: {
                role: code.role
            }
        })
    }


    await prisma.inviteCode.delete({ where: { uuid: code.uuid } })

    return { message: "Invite accepted", success: true }
}