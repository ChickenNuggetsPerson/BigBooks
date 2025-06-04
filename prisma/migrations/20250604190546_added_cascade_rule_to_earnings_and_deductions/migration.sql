-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubDeduction" DROP CONSTRAINT "PayStubDeduction_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PayStubEarning" DROP CONSTRAINT "PayStubEarning_organizationId_fkey";

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubEarning" ADD CONSTRAINT "PayStubEarning_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStubDeduction" ADD CONSTRAINT "PayStubDeduction_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
