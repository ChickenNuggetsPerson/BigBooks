/*
  Warnings:

  - You are about to drop the column `orgAdminControlled` on the `Tax` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tax" DROP COLUMN "orgAdminControlled",
ADD COLUMN     "sysAdminControlled" BOOLEAN NOT NULL DEFAULT false;
