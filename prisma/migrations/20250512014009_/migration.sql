/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "authHash" TEXT NOT NULL
);
INSERT INTO "new_User" ("authHash", "email", "firstName", "lastName", "uuid") SELECT "authHash", "email", "firstName", "lastName", "uuid" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
CREATE UNIQUE INDEX "User_authHash_key" ON "User"("authHash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
