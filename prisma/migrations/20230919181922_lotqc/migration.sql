/*
  Warnings:

  - Added the required column `boxNum` to the `CategoryDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `part` to the `CategoryDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryDetail" ADD COLUMN     "boxNum" INTEGER NOT NULL,
ADD COLUMN     "part" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "LotQc" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "qcInfo" TEXT,

    CONSTRAINT "LotQc_pkey" PRIMARY KEY ("id")
);
