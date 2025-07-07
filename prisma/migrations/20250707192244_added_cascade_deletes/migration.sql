-- DropForeignKey
ALTER TABLE "TaxBracket" DROP CONSTRAINT "TaxBracket_taxSnapshotId_fkey";

-- DropForeignKey
ALTER TABLE "TaxSnapshot" DROP CONSTRAINT "TaxSnapshot_taxId_fkey";

-- AddForeignKey
ALTER TABLE "TaxSnapshot" ADD CONSTRAINT "TaxSnapshot_taxId_fkey" FOREIGN KEY ("taxId") REFERENCES "Tax"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxBracket" ADD CONSTRAINT "TaxBracket_taxSnapshotId_fkey" FOREIGN KEY ("taxSnapshotId") REFERENCES "TaxSnapshot"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
