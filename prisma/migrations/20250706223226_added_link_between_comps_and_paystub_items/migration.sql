-- AlterTable
ALTER TABLE "PayStubItem" ADD COLUMN     "compensationId" TEXT;

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_compensationId_fkey" FOREIGN KEY ("compensationId") REFERENCES "EmployeeCompensation"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
