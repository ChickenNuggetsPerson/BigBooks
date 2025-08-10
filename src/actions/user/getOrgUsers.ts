import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Membership, Prisma, User } from "@/database/generated/prisma/client"
import { prisma } from "@/database/prisma"





// Not a server action, should only be called by the server
export default async function getOrgUsers(orgUUID: string) {

    await throwIfInsufficientPerms(Permissions.admin.users.view)

    const memberships = await prisma.membership.findMany({
        where: { organizationId: orgUUID },
        include: {
            user: true
        },
        orderBy: {
            joinedAt: "asc"
        }
    })
    const users = [] as Prisma.UserGetPayload<{ include: { memberships: true } }>[]

    for (let i = 0; i < memberships.length; i++) {
        const user = memberships[i].user as User & { memberships: Membership[] }
        user.memberships = [memberships[i]]
        user.passHash = ""
        users.push(user)
    }

    return users
}