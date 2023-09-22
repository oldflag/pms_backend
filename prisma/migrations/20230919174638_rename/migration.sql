/*
  Warnings:

  - You are about to drop the `KitTube` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "KitTube" DROP CONSTRAINT "KitTube_boxId_fkey";

-- DropTable
DROP TABLE "KitTube";

-- CreateTable
CREATE TABLE "ProductItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "generic_name" TEXT,
    "part" TEXT,
    "lot" TEXT,
    "store" TEXT,
    "boxId" TEXT,
    "status" TEXT,
    "expiration_date" TIMESTAMPTZ(0),
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE SET NULL ON UPDATE CASCADE;
