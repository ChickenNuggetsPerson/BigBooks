import { Prisma } from "@/database/generated/prisma";


export type PaystubUUIDWithEmployee = Prisma.PayStubGetPayload<{
    select: {
        employee: {
            select: {
                uuid: true,
                firstName: true,
                lastName: true
            }
        },
        uuid: true
    },
}>