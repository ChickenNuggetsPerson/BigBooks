'use server'

import { getSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { prisma } from "@/database/prisma";
import { addDays } from "@/utils/functions/Date";




export default async function makeInviteCode(perms: string[]) {
    
    await throwIfInsufficientPerms(Permissions.admin.users.create)
    const session = await getSession()
    if (!session) { return }

    const org = await prisma.organization.findUnique({ where: { uuid: session.orgUUID }})
    if (!org) { return }

    await prisma.inviteCode.create({
        data: {
            perms: perms,
            expires: addDays(new Date(), 7),
            organizationId: org.uuid
        }
    })
}