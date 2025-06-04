/*
  Warnings:

  - You are about to drop the `PayStubDeduction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PayStubEarning` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_payStubId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_payrollGroupId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_payStubId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_payrollGroupId_fkey";

-- DropTable
DROP TABLE "PayStubDeduction";

-- DropTable
DROP TABLE "PayStubEarning";

-- CreateTable
CREATE TABLE "PayStubItem" (
    "uuid" TEXT NOT NULL,
    "payStubId" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "organizationId" TEXT,
    "payrollGroupId" TEXT,
    "employeeId" TEXT,
    "type" "PayStubItemType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "hours" DECIMAL(65,30),
    "rate" DECIMAL(65,30),
    "percent" DECIMAL(65,30),
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PayStubItem_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_payStubId_fkey" FOREIGN KEY ("payStubId") REFERENCES "PayStub"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_payrollGroupId_fkey" FOREIGN KEY ("payrollGroupId") REFERENCES "PayrollGroup"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
