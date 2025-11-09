import { Prisma, PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
    const prismaClient = new PrismaClient();
    return prismaClient;
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
  } & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export type PrismaClientType = typeof prisma;
export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;