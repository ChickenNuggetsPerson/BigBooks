-- CreateEnum
CREATE TYPE "AbsMaxPeriodTypes" AS ENUM ('None', 'Month', 'Year');

-- AlterTable
ALTER TABLE "PayStubItem" ADD COLUMN     "payrollItemId" TEXT;

-- AlterTable
ALTER TABLE "PayrollItem" ADD COLUMN     "absMax" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "absMaxPeriod" "AbsMaxPeriodTypes" NOT NULL DEFAULT 'None';

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_payrollItemId_fkey" FOREIGN KEY ("payrollItemId") REFERENCES "PayrollItem"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
