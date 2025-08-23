-- AlterTable
ALTER TABLE "PayStub" ADD COLUMN     "relatedPayrollDraftId" TEXT;

-- AddForeignKey
ALTER TABLE "PayStub" ADD CONSTRAINT "PayStub_relatedPayrollDraftId_fkey" FOREIGN KEY ("relatedPayrollDraftId") REFERENCES "PayrollDraft"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
