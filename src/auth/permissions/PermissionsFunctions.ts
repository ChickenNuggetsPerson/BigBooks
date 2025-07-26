import { getSession, getUserFromSession } from "../auth";
import { Membership } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { Permissions } from "./PermissionsDef";




// To be run in server functions
export async function throwIfInsufficientPerms(perm: string, orgUUID: string = "") {
    const result = await userHasPermission({ perm, orgUUID })
    if (!result) {
        throw new Error(`Insufficient Permissions For Action: ${perm}`);
    }
}

export async function userHasPermission({ perm, orgUUID, membership }: {
    perm: string,
    orgUUID?: string,
    membership?: Membership | null
}) {
    const session = await getSession()
    if (!session) { return false }

    if (session.isAdmin) { return true }

    let mem = membership
    if (!membership) {
        mem = await getOrgMembership(orgUUID)
    }
    if (!mem) { return false }

    // Org admins have full perms
    if (mem.orgAdmin) { return true }

    if (mem.permissions.includes(perm)) { return true }

    return false
}

export function canControlUsers(membership: Membership) {
    const p = membership.permissions
    return p.includes(Permissions.admin.users.create) || p.includes(Permissions.admin.users.del) || p.includes(Permissions.admin.users.edit)
}

export async function throwIfNotOrgAdmin() {
    const membership = await getOrgMembership()
    if (!membership) {
        throw new Error("Not Org Admin")
    }
    if (!membership.orgAdmin) {
        throw new Error("Not Org Admin")
    }
}


// To be run in server actions
export async function getOrgMembership(orgUUID: string = ""): Promise<Membership | null> {

    const session = await getSession()
    if (!session) {
        return null
    }

    const user = await getUserFromSession()

    if (!user) {
        return null
    }

    const membership = await prisma.membership.findFirst({
        where: {
            organizationId: (orgUUID == "") ? session.orgUUID : orgUUID,
            userId: user.uuid
        }
    })

    if (!membership) {
        return null
    }

    return membership
}


export async function getUsersMemberships(userUUID: string) {
    const user = await prisma.user.findUnique({
        where: { uuid: userUUID },
        include: { memberships: true }
    })

    if (!user) { return [] }
    return user.memberships
}

