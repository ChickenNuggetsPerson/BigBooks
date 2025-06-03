/*
  Warnings:

  - You are about to drop the column `hourlyRates` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `isSalary` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `periodsPerYear` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `periodsRefDate` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `bonus` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `commission` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `federalAmt` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `federalRate` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `hourly` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `mediAmt` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `mediRate` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `otherItems` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `payperiodId` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `socialAmt` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `socialRate` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `stateAmt` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `stateRate` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the `Payperiod` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `payDate` to the `PayStub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodEnd` to the `PayStub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodStart` to the `PayStub` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PayStub" DROP CONSTRAINT "PayStub_payperiodId_fkey";

-- DropForeignKey
ALTER TABLE "Payperiod" DROP CONSTRAINT "Payperiod_organizationId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "hourlyRates",
DROP COLUMN "isSalary",
DROP COLUMN "salary";

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "periodsPerYear",
DROP COLUMN "periodsRefDate";

-- AlterTable
ALTER TABLE "PayStub" DROP COLUMN "bonus",
DROP COLUMN "commission",
DROP COLUMN "federalAmt",
DROP COLUMN "federalRate",
DROP COLUMN "hourly",
DROP COLUMN "mediAmt",
DROP COLUMN "mediRate",
DROP COLUMN "otherItems",
DROP COLUMN "payperiodId",
DROP COLUMN "salary",
DROP COLUMN "socialAmt",
DROP COLUMN "socialRate",
DROP COLUMN "stateAmt",
DROP COLUMN "stateRate",
ADD COLUMN     "grossEarnings" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "netPay" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "payDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "periodEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "periodStart" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "totalDeductions" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Payperiod";

-- CreateTable
CREATE TABLE "PayrollGroup" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "payFrequency" INTEGER NOT NULL DEFAULT 14,
    "payRefDate" TIMESTAMP(3) NOT NULL,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "PayrollGroup_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "EmployeeCompensation" (
    "uuid" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "payrollGroupId" TEXT NOT NULL,
    "isSalary" BOOLEAN NOT NULL DEFAULT true,
    "salaryAmount" DECIMAL(65,30),

    CONSTRAINT "EmployeeCompensation_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "HourlyRate" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "canOvertime" BOOLEAN NOT NULL,
    "compensationId" TEXT NOT NULL,

    CONSTRAINT "HourlyRate_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "PayStubEarning" (
    "id" TEXT NOT NULL,
    "payStubId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,
    "hours" DECIMAL(65,30),
    "rate" DECIMAL(65,30),

    CONSTRAINT "PayStubEarning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayStubDeduction" (
    "id" TEXT NOT NULL,
    "payStubId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,
    "rate" DECIMAL(65,30),

    CONSTRAINT "PayStubDeduction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PayrollGroup_uuid_key" ON "PayrollGroup"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeCompensation_employeeId_payrollGroupId_key" ON "EmployeeCompensation"("employeeId", "payrollGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "HourlyRate_uuid_key" ON "HourlyRate"("uuid");

-- AddForeignKey
ALTER TABLE "PayrollGroup" ADD CONSTRAINT "PayrollGroup_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeCompensation" ADD CONSTRAINT "EmployeeCompensation_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeCompensation" ADD CONSTRAINT "EmployeeCompensation_payrollGroupId_fkey" FOREIGN KEY ("payrollGroupId") REFERENCES "PayrollGroup"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HourlyRate" ADD CONSTRAINT "HourlyRate_compensationId_fkey" FOREIGN KEY ("compensationId") REFERENCES "EmployeeCompensation"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_payStubId_fkey" FOREIGN KEY ("payStubId") REFERENCES "PayStub"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_payStubId_fkey" FOREIGN KEY ("payStubId") REFERENCES "PayStub"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
