import { Prisma } from "@/database/generated/prisma";


export type PaystubUUIDWithEmployee = Prisma.PayStubGetPayload<{
    select: {
        employee: true,
        uuid: true
    },
}>