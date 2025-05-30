-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "RegistrationCode" (
    "uuid" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistrationCode_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "InviteCode" (
    "uuid" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InviteCode_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Role" (
    "uuid" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT '',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Organization" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "periodsPerYear" INTEGER NOT NULL DEFAULT 26,
    "periodsRefDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Employee" (
    "uuid" TEXT NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "middleName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "notes" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL DEFAULT '',
    "ssn" TEXT NOT NULL DEFAULT '',
    "isSalary" BOOLEAN NOT NULL DEFAULT true,
    "salary" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "hourlyRates" JSONB NOT NULL,
    "filingStatus" TEXT NOT NULL DEFAULT 'Single',
    "dependants" INTEGER NOT NULL DEFAULT 0,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Payperiod" (
    "uuid" TEXT NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "includedEmployees" JSONB NOT NULL,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "Payperiod_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "PayStub" (
    "uuid" TEXT NOT NULL,
    "hourly" JSONB NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "commission" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "bonus" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "federalRate" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "federalAmt" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "stateRate" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "stateAmt" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "mediRate" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "mediAmt" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "socialRate" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "socialAmt" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "otherItems" JSONB NOT NULL,
    "employeeId" TEXT NOT NULL,
    "payperiodId" TEXT NOT NULL,

    CONSTRAINT "PayStub_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_passHash_key" ON "User"("passHash");

-- CreateIndex
CREATE UNIQUE INDEX "RegistrationCode_uuid_key" ON "RegistrationCode"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_uuid_key" ON "InviteCode"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Role_userId_organizationId_key" ON "Role"("userId", "organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_uuid_key" ON "Organization"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uuid_key" ON "Employee"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Payperiod_uuid_key" ON "Payperiod"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PayStub_uuid_key" ON "PayStub"("uuid");

-- AddForeignKey
ALTER TABLE "InviteCode" ADD CONSTRAINT "InviteCode_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payperiod" ADD CONSTRAINT "Payperiod_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStub" ADD CONSTRAINT "PayStub_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayStub" ADD CONSTRAINT "PayStub_payperiodId_fkey" FOREIGN KEY ("payperiodId") REFERENCES "Payperiod"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
