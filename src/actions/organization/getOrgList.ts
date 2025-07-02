'use server'

import { getSession, redirectIfInvalidSession } from "@/auth/auth";
import { DispRole, getRoleFromID, Role_Admin, Role_SysAdmin } from "@/auth/roles/Roles";
import { Organization } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";


export type OrgWithRole = Organization & { role: DispRole }

export default async function getOrgList(showDeleted: boolean): Promise<OrgWithRole[]> {

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
        const orgsWithRoles = orgs.map(o => {
            return { ...o, role: Role_SysAdmin } as OrgWithRole
        })

        return orgsWithRoles

    }


    const user = await prisma.user.findUnique({ where: { uuid: session.userID }, include: { memberships: true } })
    if (!user) { return [] }


    let list = []
    for (let i = 0; i < user.memberships.length; i++) {
        const org = await prisma.organization.findUnique({ where: { uuid: user.memberships[i].organizationId } })
        if (!org) { continue }

        const role = getRoleFromID(user.memberships[i].role)

        if (org.isDeleted && (role.level < Role_Admin.level)) {
            continue
        }

        list.push({...org, role: role} as OrgWithRole)
    }

    if (!showDeleted) {
        list = list.filter((e) => { return e.isDeleted == false })
    }

    return list
}