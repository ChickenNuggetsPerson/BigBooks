import { Prisma } from "@/database/generated/prisma";



export type PayrollDraftWithEmployeesAndStubs = Prisma.PayrollDraftGetPayload<{
    include: {
        employees: {
            select: {
                uuid: true,
                firstName: true,
                lastName: true,
            }
        },
        paystubs: {
            select: {
                uuid: true,
                employee: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                }
            }
        }
    }
}>

export type PayrollDraftWithEmployees = Prisma.PayrollDraftGetPayload<{
    include: {
        employees: {
            select: {
                uuid: true,
                firstName: true,
                lastName: true,
            }
        }
    }
}>

export type PayrollDraftWithCount = Prisma.PayrollDraftGetPayload<{
    include: {
        _count: {
            select: {
                employees: true
            }
        }
    }
}>
