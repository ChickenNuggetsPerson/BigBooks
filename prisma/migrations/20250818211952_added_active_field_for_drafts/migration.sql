/*
  Warnings:

  - A unique constraint covering the columns `[activeDraftId]` on the table `Membership` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "activeDraftId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Membership_activeDraftId_key" ON "Membership"("activeDraftId");

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_activeDraftId_fkey" FOREIGN KEY ("activeDraftId") REFERENCES "PayrollDraft"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
