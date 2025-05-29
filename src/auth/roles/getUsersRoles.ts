import { prisma } from "@/database/prisma";
import { getRoleFromID } from "./Roles";








export async function getUsersRoles(userUUID: string) {
    const user = await prisma.user.findUnique({
        where: { uuid: userUUID },
        include: { memberships: true }
    })

    if (!user) { return [] }

    return user.memberships.map((membership) => {
        const role = getRoleFromID(membership.role)
        role.orgUUID = membership.organizationId
        role.userUUID = membership.userId
        return role
    })
}