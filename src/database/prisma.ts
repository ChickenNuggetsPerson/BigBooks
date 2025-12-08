import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'
import { SSNPrismaExtension } from './SSNEncryption';


type ExtendedPrismaClient = ReturnType<typeof prismaGenerator>;

function prismaGenerator() {

    const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL
    })

    return new PrismaClient({ adapter }).$extends(SSNPrismaExtension);
}

const globalForPrisma = globalThis as unknown as {
    prisma: ExtendedPrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaGenerator();

if (process.env.NODE_ENV !== 'production') { globalForPrisma.prisma = prisma; }
