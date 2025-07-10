/*
  Warnings:

  - You are about to drop the column `type` on the `TaxBracket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TaxBracket" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "TaxSnapshot" ADD COLUMN     "taxType" "TaxType" NOT NULL DEFAULT 'ProgressiveRate';
