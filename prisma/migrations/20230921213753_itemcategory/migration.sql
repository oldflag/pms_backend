/*
  Warnings:

  - You are about to drop the column `subProtocol` on the `ItemCategory` table. All the data in the column will be lost.
  - Added the required column `subprotocol` to the `ItemCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemCategory" DROP COLUMN "subProtocol",
ADD COLUMN     "subprotocol" TEXT NOT NULL;
