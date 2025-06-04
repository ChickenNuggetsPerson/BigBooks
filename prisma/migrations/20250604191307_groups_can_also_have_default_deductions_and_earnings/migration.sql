-- AlterTable
ALTER TABLE "PayStubDeduction" ADD COLUMN     "payrollGroupId" TEXT;

-- AlterTable
ALTER TABLE "PayStubEarning" ADD COLUMN     "payrollGroupId" TEXT;

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_payrollGroupId_fkey" FOREIGN KEY ("payrollGroupId") REFERENCES "PayrollGroup"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_payrollGroupId_fkey" FOREIGN KEY ("payrollGroupId") REFERENCES "PayrollGroup"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
