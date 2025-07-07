-- CreateEnum
CREATE TYPE "TaxType" AS ENUM ('FlatRate', 'FlatAmmount');

-- CreateTable
CREATE TABLE "Tax" (
    "uuid" TEXT NOT NULL,
    "orgAdminControlled" BOOLEAN NOT NULL DEFAULT false,
    "organizationID" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tax_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "TaxSnapshot" (
    "uuid" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "effectiveThrough" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "TaxSnapshot_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "TaxBracket" (
    "uuid" TEXT NOT NULL,
    "taxSnapshotId" TEXT NOT NULL,
    "min" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "hasMinBound" BOOLEAN NOT NULL,
    "max" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "hasMaxBound" BOOLEAN NOT NULL,
    "type" "TaxType" NOT NULL DEFAULT 'FlatRate',
    "rate" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "ammount" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "TaxBracket_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tax_uuid_key" ON "Tax"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "TaxSnapshot_uuid_key" ON "TaxSnapshot"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "TaxBracket_uuid_key" ON "TaxBracket"("uuid");

-- AddForeignKey
ALTER TABLE "Tax" ADD CONSTRAINT "Tax_organizationID_fkey" FOREIGN KEY ("organizationID") REFERENCES "Organization"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxSnapshot" ADD CONSTRAINT "TaxSnapshot_taxId_fkey" FOREIGN KEY ("taxId") REFERENCES "Tax"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxBracket" ADD CONSTRAINT "TaxBracket_taxSnapshotId_fkey" FOREIGN KEY ("taxSnapshotId") REFERENCES "TaxSnapshot"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
