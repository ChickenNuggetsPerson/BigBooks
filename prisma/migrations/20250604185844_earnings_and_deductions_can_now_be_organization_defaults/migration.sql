/*
  Warnings:

  - Added the required column `name` to the `PayStubDeduction` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `PayStubDeduction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `PayStubEarning` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `PayStubEarning` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PayStubItemType" AS ENUM ('Earning', 'Tax', 'Other');

-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_payStubId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_payStubId_fkey";

-- AlterTable
ALTER TABLE "PayStubDeduction" ADD COLUMN     "employeeId" TEXT,
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "organizationId" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" "PayStubItemType" NOT NULL;

-- AlterTable
ALTER TABLE "PayStubEarning" ADD COLUMN     "employeeId" TEXT,
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "organizationId" TEXT,
ALTER COLUMN "payStubId" DROP NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "PayStubItemType" NOT NULL;

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_payStubId_fkey" FOREIGN KEY ("payStubId") REFERENCES "PayStub"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_payStubId_fkey" FOREIGN KEY ("payStubId") REFERENCES "PayStub"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
