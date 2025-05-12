/*
  Warnings:

  - Added the required column `isActive` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "isActive" BOOLEAN NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passHash" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "firstName", "lastName", "passHash", "username", "uuid") SELECT "email", "firstName", "lastName", "passHash", "username", "uuid" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_passHash_key" ON "User"("passHash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
