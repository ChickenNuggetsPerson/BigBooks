'use server'

import { getSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { PayrollGroup } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";



export default async function upsertPayrollGroup(group: PayrollGroup) {

    await throwIfInsufficientPerms(RoleTypes.Admin)

    const g = await prisma.payrollGroup.findUnique({ where: { uuid: group.uuid } })
    const session = await getSession()
    if (!session) { return }

    if (g) {
        await prisma.payrollGroup.update({
            where: { uuid: group.uuid },
            data: {
                name: group.name,
                description: group.description,
                payFrequency: group.payFrequency,
                payRefDate: group.payRefDate,
                periodRefDate: group.periodRefDate,
                organizationId: session.orgUUID
            }
        })
    } else {
        await prisma.payrollGroup.create({
            data: {
                name: group.name,
                description: group.description,
                payFrequency: group.payFrequency,
                payRefDate: group.payRefDate,
                periodRefDate: group.periodRefDate,
                organizationId: session.orgUUID
            }
        })
    }
}