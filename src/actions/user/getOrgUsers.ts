import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { Prisma } from "@/database/generated/prisma/client"
import { prisma } from "@/database/prisma"





// Not a server action, should only be called by the server
export default async function getOrgUsers(orgUUID: string) {

    await throwIfInsufficientPerms(RoleTypes.Admin)

    const roles = await prisma.role.findMany({ where: { organizationId: orgUUID } })
    const users = [] as Prisma.UserGetPayload<{ include: { memberships: true } }>[]

    for (let i = 0; i < roles.length; i++) {
        const user = await prisma.user.findUnique({ where: { uuid: roles[i].userId, isActive: true }, include: { memberships: true }})
        if (user) {
            user.passHash = ""
            users.push(user)
        }
    }

    return users
}