'use server'

import { getSession, redirectIfInvalidSession } from "@/auth/auth";
import { getRoleFromID, Role_Admin } from "@/auth/roles/Roles";
import { getDispOrganization } from "@/database/models/DisplayModels";
import { prisma } from "@/database/prisma";




export default async function getOrgList(showDeleted: boolean) {

    await redirectIfInvalidSession()
    const session = await getSession()
    if (!session) { return [] }

    let list = []

    if (session.isAdmin) {
        const orgs = await prisma.organization.findMany()
        for (let i = 0; i < orgs.length; i++) {
            list.push(await getDispOrganization(orgs[i]))
        }

    } else {

        const user = await prisma.user.findUnique({ where: { uuid: session.userID }, include: { memberships: true } })
        if (!user) { return [] }

        for (let i = 0; i < user.memberships.length; i++) {
            const org = await prisma.organization.findUnique({ where: { uuid: user.memberships[i].organizationId } })
            if (!org) { continue }

            if (org.isDeleted && (getRoleFromID(user.memberships[i].role).level) < Role_Admin.level) {
                continue
            }

            list.push(await getDispOrganization(org))
        }

    }

    if (!showDeleted) {
        list = list.filter((e) => { return e.isDeleted == false })
    }

    list = list.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1 }
        return 0
    })

    return list
}