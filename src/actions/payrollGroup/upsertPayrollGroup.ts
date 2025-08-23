'use server'

import { getSession } from "@/auth/auth";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { PayrollGroup } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";



export default async function upsertPayrollGroup(group: PayrollGroup) {

    await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.edit)

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
        await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.create)
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