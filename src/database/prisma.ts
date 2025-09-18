import { PrismaClient } from './generated/prisma/client';
import { SSNPrismaExtension } from './SSNEncryption';

type ExtendedPrismaClient = ReturnType<typeof prismaGenerator>;

function prismaGenerator() {
    return new PrismaClient().$extends(SSNPrismaExtension);
}

const globalForPrisma = globalThis as unknown as {
    prisma: ExtendedPrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaGenerator();

if (process.env.NODE_ENV !== 'production') { globalForPrisma.prisma = prisma; }
