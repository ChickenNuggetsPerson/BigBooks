'use server'

import { prisma } from "@/database/prisma"



type PaystubItemSelector = {
    organizationId?: string,
    payrollGroupId?: string,
    employeeId?: string
}

export default async function getPaystubItems(options: PaystubItemSelector) {

    // TODO: Handle permissions

    if (options.organizationId) {
        return await prisma.payStubItem.findMany({ where: { organizationId: options.organizationId, isDefault: true } })
    }

    if (options.payrollGroupId) {
        return await prisma.payStubItem.findMany({ where: { payrollGroupId: options.payrollGroupId, isDefault: true } })
    }

    if (options.employeeId) {
        return await prisma.payStubItem.findMany({ where: { employeeId: options.employeeId, isDefault: true } })
    }

    return []
}