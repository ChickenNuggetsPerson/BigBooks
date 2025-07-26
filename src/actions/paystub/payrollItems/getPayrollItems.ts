'use server'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions"
import { Prisma } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



type PaystubItemSelector = {
    organizationId?: string,
    payrollGroupId?: string,
    employeeId?: string
}

export type PayrollItemWithCount = Prisma.PayrollItemGetPayload<{ include: { _count: { select: { PayStubItem: true } } } }>

export default async function getPayrollItems(options: PaystubItemSelector) {

    if (options.organizationId) {
        await throwIfInsufficientPerms(Permissions.admin.orgItem.view)
    }
    if (options.payrollGroupId) {
        await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.items.view)
    }
    if (options.employeeId) {
        await throwIfInsufficientPerms(Permissions.employee.items.view)
    }

    const data = {
        organization: [] as PayrollItemWithCount[],
        group: [] as PayrollItemWithCount[],
        employee: [] as PayrollItemWithCount[]
    }

    if (options.organizationId) {
        data.organization = await prisma.payrollItem.findMany({
            where: { organizationId: options.organizationId },
            include: {
                _count: {
                    select: { PayStubItem: true }
                }
            }
        })
    }

    if (options.payrollGroupId) {
        data.group = await prisma.payrollItem.findMany({
            where: { payrollGroupId: options.payrollGroupId },
            include: {
                _count: {
                    select: { PayStubItem: true }
                }
            }
        })
    }

    if (options.employeeId) {
        data.employee = await prisma.payrollItem.findMany({
            where: { employeeId: options.employeeId },
            include: {
                _count: {
                    select: { PayStubItem: true }
                }
            }
        })
    }

    return serializeData(data)
}