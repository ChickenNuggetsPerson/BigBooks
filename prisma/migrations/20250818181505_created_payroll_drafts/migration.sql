-- CreateTable
CREATE TABLE "PayrollDraft" (
    "uuid" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "startedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "periodPaydate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayrollDraft_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "_EmployeeToPayrollDraft" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EmployeeToPayrollDraft_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "PayrollDraft_uuid_key" ON "PayrollDraft"("uuid");

-- CreateIndex
CREATE INDEX "_EmployeeToPayrollDraft_B_index" ON "_EmployeeToPayrollDraft"("B");

-- AddForeignKey
ALTER TABLE "PayrollDraft" ADD CONSTRAINT "PayrollDraft_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToPayrollDraft" ADD CONSTRAINT "_EmployeeToPayrollDraft_A_fkey" FOREIGN KEY ("A") REFERENCES "Employee"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToPayrollDraft" ADD CONSTRAINT "_EmployeeToPayrollDraft_B_fkey" FOREIGN KEY ("B") REFERENCES "PayrollDraft"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
