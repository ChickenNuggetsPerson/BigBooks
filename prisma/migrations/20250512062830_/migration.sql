/*
  Warnings:

  - Added the required column `expires` to the `RegistrationCode` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RegistrationCode" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "expires" DATETIME NOT NULL
);
INSERT INTO "new_RegistrationCode" ("uuid") SELECT "uuid" FROM "RegistrationCode";
DROP TABLE "RegistrationCode";
ALTER TABLE "new_RegistrationCode" RENAME TO "RegistrationCode";
CREATE UNIQUE INDEX "RegistrationCode_uuid_key" ON "RegistrationCode"("uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
