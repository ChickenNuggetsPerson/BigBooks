
import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Prisma } from "@/database/generated/prisma/client"
import { prisma } from "@/database/prisma"





// Not a server action, should only be called by the server
export default async function getOrgUsers(orgUUID: string) {

    await throwIfInsufficientPerms(Permissions.admin.users.view)

    const memberships = await prisma.membership.findMany({ where: { organizationId: orgUUID } })
    const users = [] as Prisma.UserGetPayload<{ include: { memberships: true } }>[]

    for (let i = 0; i < memberships.length; i++) {
        const user = await prisma.user.findUnique({ where: { uuid: memberships[i].userId, isActive: true }, include: { memberships: true }})
        if (user) {
            user.passHash = ""
            users.push(user)
        }
    }

    return users
}