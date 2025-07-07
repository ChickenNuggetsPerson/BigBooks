-- AlterTable
ALTER TABLE "PayStubItem" ADD COLUMN     "taxID" TEXT;

-- AddForeignKey
ALTER TABLE "PayStubItem" ADD CONSTRAINT "PayStubItem_taxID_fkey" FOREIGN KEY ("taxID") REFERENCES "TaxSnapshot"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
