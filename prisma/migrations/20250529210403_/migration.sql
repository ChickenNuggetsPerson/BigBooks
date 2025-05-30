-- CreateTable
CREATE TABLE "InviteCode" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "InviteCode_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "InviteCode_uuid_key" ON "InviteCode"("uuid");
