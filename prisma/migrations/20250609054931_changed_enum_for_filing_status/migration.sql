/*
  Warnings:

  - The `filingStatus` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "FilingTypes" AS ENUM ('Single', 'Joint');

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "filingStatus",
ADD COLUMN     "filingStatus" "FilingTypes" NOT NULL DEFAULT 'Single';
