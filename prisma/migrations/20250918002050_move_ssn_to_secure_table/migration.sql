/*
  Warnings:

  - You are about to drop the column `ssn` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "ssn",
ADD COLUMN     "employeeSensitiveUuid" TEXT;

-- CreateTable
CREATE TABLE "EmployeeSensitive" (
    "uuid" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "ssnEnc" TEXT,
    "ssnIv" TEXT,
    "ssnTag" TEXT,

    CONSTRAINT "EmployeeSensitive_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeSensitive_uuid_key" ON "EmployeeSensitive"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeSensitive_employeeId_key" ON "EmployeeSensitive"("employeeId");

-- AddForeignKey
ALTER TABLE "EmployeeSensitive" ADD CONSTRAINT "EmployeeSensitive_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
