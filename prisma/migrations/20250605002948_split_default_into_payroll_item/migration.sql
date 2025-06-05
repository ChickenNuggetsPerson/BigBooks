/*
  Warnings:

  - You are about to drop the column `employeeId` on the `PayStubItem` table. All the data in the column will be lost.
  - You are about to drop the column `isDefault` on the `PayStubItem` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `PayStubItem` table. All the data in the column will be lost.
  - You are about to drop the column `payrollGroupId` on the `PayStubItem` table. All the data in the column will be lost.
  - Made the column `payStubId` on table `PayStubItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PayStubItem" DROP CONSTRAINT "PayStubItem_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubItem" DROP CONSTRAINT "PayStubItem_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubItem" DROP CONSTRAINT "PayStubItem_payrollGroupId_fkey";

-- AlterTable
ALTER TABLE "PayStubItem" DROP COLUMN "employeeId",
DROP COLUMN "isDefault",
DROP COLUMN "organizationId",
DROP COLUMN "payrollGroupId",
ALTER COLUMN "payStubId" SET NOT NULL;

-- CreateTable
CREATE TABLE "PayrollItem" (
    "uuid" TEXT NOT NULL,
    "organizationId" TEXT,
    "payrollGroupId" TEXT,
    "employeeId" TEXT,
    "type" "PayStubItemType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "percent" DECIMAL(65,30),
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PayrollItem_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "PayrollItem" ADD CONSTRAINT "PayrollItem_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayrollItem" ADD CONSTRAINT "PayrollItem_payrollGroupId_fkey" FOREIGN KEY ("payrollGroupId") REFERENCES "PayrollGroup"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayrollItem" ADD CONSTRAINT "PayrollItem_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
