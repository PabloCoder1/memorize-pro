import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// No Prisma 7, se o seu .env e o prisma.config.ts estiverem certos,
// você não precisa passar NADA no construtor.
export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;