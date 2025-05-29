/*
  Warnings:

  - You are about to drop the `Membership` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Membership";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Role" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT '',
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Role_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_userId_organizationId_key" ON "Role"("userId", "organizationId");
