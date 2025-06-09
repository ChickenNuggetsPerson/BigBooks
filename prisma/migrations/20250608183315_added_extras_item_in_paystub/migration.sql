/*
  Warnings:

  - You are about to drop the column `totalDeductions` on the `PayStub` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PayStub" DROP COLUMN "totalDeductions",
ADD COLUMN     "totalExtras" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "totalTaxes" DECIMAL(65,30) NOT NULL DEFAULT 0;
