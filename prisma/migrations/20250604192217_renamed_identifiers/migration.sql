/*
  Warnings:

  - The primary key for the `PayStubDeduction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PayStubDeduction` table. All the data in the column will be lost.
  - The primary key for the `PayStubEarning` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PayStubEarning` table. All the data in the column will be lost.
  - The required column `uuid` was added to the `PayStubDeduction` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `PayStubEarning` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "PayStubDeduction_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "PayStubEarning_pkey" PRIMARY KEY ("uuid");
