/*
  Warnings:

  - You are about to drop the column `role` on the `InviteCode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "InviteCode" DROP COLUMN "role",
ADD COLUMN     "perms" TEXT[];
