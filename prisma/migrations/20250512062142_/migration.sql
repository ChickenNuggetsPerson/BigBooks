-- CreateTable
CREATE TABLE "RegistrationCode" (
    "uuid" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "RegistrationCode_uuid_key" ON "RegistrationCode"("uuid");
