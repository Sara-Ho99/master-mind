import { PrismaClient } from "@prisma/client";
// to avoid hot reload issues
declare global {
  var prisma: PrismaClient | undefined; // union type to allow undefined
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
