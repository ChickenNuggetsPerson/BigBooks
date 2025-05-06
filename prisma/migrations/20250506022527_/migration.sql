/*
  Warnings:

  - You are about to drop the column `deductions` on the `PayStub` table. All the data in the column will be lost.
  - You are about to drop the column `reimbursements` on the `PayStub` table. All the data in the column will be lost.
  - Added the required column `otherItems` to the `PayStub` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PayStub" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "hourly" JSONB NOT NULL,
    "salary" DECIMAL NOT NULL DEFAULT 0,
    "commission" DECIMAL NOT NULL DEFAULT 0,
    "bonus" DECIMAL NOT NULL DEFAULT 0,
    "federalRate" DECIMAL NOT NULL DEFAULT 0,
    "federalAmt" DECIMAL NOT NULL DEFAULT 0,
    "stateRate" DECIMAL NOT NULL DEFAULT 0,
    "stateAmt" DECIMAL NOT NULL DEFAULT 0,
    "mediRate" DECIMAL NOT NULL DEFAULT 0,
    "mediAmt" DECIMAL NOT NULL DEFAULT 0,
    "socialRate" DECIMAL NOT NULL DEFAULT 0,
    "socialAmt" DECIMAL NOT NULL DEFAULT 0,
    "otherItems" JSONB NOT NULL,
    "employeeId" TEXT NOT NULL,
    "payperiodId" TEXT NOT NULL,
    CONSTRAINT "PayStub_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PayStub_payperiodId_fkey" FOREIGN KEY ("payperiodId") REFERENCES "Payperiod" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PayStub" ("bonus", "commission", "employeeId", "federalAmt", "federalRate", "hourly", "mediAmt", "mediRate", "payperiodId", "salary", "socialAmt", "socialRate", "stateAmt", "stateRate", "uuid") SELECT "bonus", "commission", "employeeId", "federalAmt", "federalRate", "hourly", "mediAmt", "mediRate", "payperiodId", "salary", "socialAmt", "socialRate", "stateAmt", "stateRate", "uuid" FROM "PayStub";
DROP TABLE "PayStub";
ALTER TABLE "new_PayStub" RENAME TO "PayStub";
CREATE UNIQUE INDEX "PayStub_uuid_key" ON "PayStub"("uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
