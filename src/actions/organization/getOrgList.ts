'use server'

import { getSession, redirectIfInvalidSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { Organization } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";


export default async function getOrgList(showDeleted: boolean): Promise<Organization[]> {

    await redirectIfInvalidSession()
    const session = await getSession()
    if (!session) { return [] }


    if (session.isAdmin) {
        let orgs = await prisma.organization.findMany()
        orgs = orgs.filter(o => {
            if (showDeleted) {
                return true
            }
            return !o.isDeleted
        })
        return orgs

    }


    const user = await prisma.user.findUnique({ where: { uuid: session.userID }, include: { memberships: true } })
    if (!user) { return [] }


    let list = []
    for (let i = 0; i < user.memberships.length; i++) {
        const membership = user.memberships[i]
        const org = await prisma.organization.findUnique({ where: { uuid: user.memberships[i].organizationId } })
        if (!org) { continue }

        if (org.isDeleted) {
            if (membership.permissions.includes(Permissions.admin.organization.activate)) {
                list.push(org)
            }
        } else { // Isn't deactivated
            list.push(org)
        }
    }

    if (!showDeleted) {
        list = list.filter((e) => { return e.isDeleted == false })
    }

    return list
}