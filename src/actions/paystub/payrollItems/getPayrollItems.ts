'use server'

import { RoleTypes } from "@/auth/roles/Roles"
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms"
import { PayrollItem } from "@/database/generated/prisma"
import { prisma } from "@/database/prisma"
import { serializeData } from "@/utils/serialization"



type PaystubItemSelector = {
    organizationId?: string,
    payrollGroupId?: string,
    employeeId?: string
}

export default async function getPayrollItems(options: PaystubItemSelector) {

    // TODO: Handle permissions
    await throwIfInsufficientPerms(RoleTypes.Viewer)

    const data = {
        organization: [] as PayrollItem[],
        group: [] as PayrollItem[],
        employee: [] as PayrollItem[]
    }

    if (options.organizationId) {
        data.organization = await prisma.payrollItem.findMany({ where: { organizationId: options.organizationId } })
    }

    if (options.payrollGroupId) {
        data.group = await prisma.payrollItem.findMany({ where: { payrollGroupId: options.payrollGroupId } })
    }

    if (options.employeeId) {
        data.employee = await prisma.payrollItem.findMany({ where: { employeeId: options.employeeId } })
    }

    return serializeData(data)
}