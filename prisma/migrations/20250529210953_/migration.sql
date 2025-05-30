/*
  Warnings:

  - Added the required column `role` to the `InviteCode` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InviteCode" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "InviteCode_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InviteCode" ("expires", "organizationId", "uuid") SELECT "expires", "organizationId", "uuid" FROM "InviteCode";
DROP TABLE "InviteCode";
ALTER TABLE "new_InviteCode" RENAME TO "InviteCode";
CREATE UNIQUE INDEX "InviteCode_uuid_key" ON "InviteCode"("uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
