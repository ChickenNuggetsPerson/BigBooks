/*
  Warnings:

  - You are about to drop the column `canMakeOrganizations` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "canMakeOrganizations",
ADD COLUMN     "allocatedOrganizations" INTEGER NOT NULL DEFAULT 0;
