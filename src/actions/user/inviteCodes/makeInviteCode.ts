'use server'

import { getSession } from "@/auth/auth";
import { getIDFromRoleType, RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { prisma } from "@/database/prisma";




export default async function makeInviteCode(roleType: RoleTypes) {
    
    await throwIfInsufficientPerms(RoleTypes.Admin)
    const session = await getSession()
    if (!session) { return }

    const org = await prisma.organization.findUnique({ where: { uuid: session.orgUUID }})
    if (!org) { return }

    await prisma.inviteCode.create({
        data: {
            role: getIDFromRoleType(roleType),
            expires: (new Date()).addDays(7),
            organizationId: org.uuid
        }
    })
}