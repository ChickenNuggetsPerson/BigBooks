-- DropForeignKey
ALTER TABLE "EmployeeCompensation" DROP CONSTRAINT "EmployeeCompensation_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeCompensation" DROP CONSTRAINT "EmployeeCompensation_payrollGroupId_fkey";

-- DropForeignKey
ALTER TABLE "HourlyRate" DROP CONSTRAINT "HourlyRate_compensationId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_userId_fkey";

-- DropForeignKey
ALTER TABLE "PayStub" DROP CONSTRAINT "PayStub_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PayrollDraft" DROP CONSTRAINT "PayrollDraft_membershipId_fkey";

-- AddForeignKey
ALTER TABLE "EmployeeCompensation" ADD CONSTRAINT "EmployeeCompensation_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeCompensation" ADD CONSTRAINT "EmployeeCompensation_payrollGroupId_fkey" FOREIGN KEY ("payrollGroupId") REFERENCES "PayrollGroup"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HourlyRate" ADD CONSTRAINT "HourlyRate_compensationId_fkey" FOREIGN KEY ("compensationId") REFERENCES "EmployeeCompensation"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayrollDraft" ADD CONSTRAINT "PayrollDraft_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStub" ADD CONSTRAINT "PayStub_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
