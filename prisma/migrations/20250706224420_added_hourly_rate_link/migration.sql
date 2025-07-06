-- AlterTable
ALTER TABLE "PayStubItem" ADD COLUMN     "hourlyRateId" TEXT;

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_hourlyRateId_fkey" FOREIGN KEY ("hourlyRateId") REFERENCES "HourlyRate"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
