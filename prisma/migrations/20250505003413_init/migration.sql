-- CreateTable
CREATE TABLE "Organization" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "periodsPerYear" INTEGER NOT NULL DEFAULT 26,
    "periodsRefDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL DEFAULT '',
    "middleName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "notes" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL DEFAULT '',
    "ssn" TEXT NOT NULL DEFAULT '',
    "isSalary" BOOLEAN NOT NULL DEFAULT true,
    "salary" DECIMAL NOT NULL DEFAULT 0,
    "hourlyRates" JSONB NOT NULL,
    "filingStatus" TEXT NOT NULL DEFAULT 'Single',
    "dependants" INTEGER NOT NULL DEFAULT 0,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "organizationId" TEXT NOT NULL,
    CONSTRAINT "Employee_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payperiod" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "periodStart" DATETIME NOT NULL,
    "periodEnd" DATETIME NOT NULL,
    "includedEmployees" JSONB NOT NULL,
    "organizationId" TEXT NOT NULL,
    CONSTRAINT "Payperiod_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PayStub" (
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
    "reimbursements" JSONB NOT NULL,
    "deductions" JSONB NOT NULL,
    "employeeId" TEXT NOT NULL,
    "payperiodId" TEXT NOT NULL,
    CONSTRAINT "PayStub_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PayStub_payperiodId_fkey" FOREIGN KEY ("payperiodId") REFERENCES "Payperiod" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_uuid_key" ON "Organization"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uuid_key" ON "Employee"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Payperiod_uuid_key" ON "Payperiod"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PayStub_uuid_key" ON "PayStub"("uuid");
