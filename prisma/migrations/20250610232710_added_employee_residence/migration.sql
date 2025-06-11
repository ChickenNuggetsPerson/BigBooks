-- CreateEnum
CREATE TYPE "AvaliableStates" AS ENUM ('Other', 'Utah');

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "residence" "AvaliableStates" NOT NULL DEFAULT 'Other';

-- DropEnum
DROP TYPE "States";
