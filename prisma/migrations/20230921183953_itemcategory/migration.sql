/*
  Warnings:

  - You are about to drop the column `categoryId` on the `ItemCategory` table. All the data in the column will be lost.
  - Added the required column `productCategoryId` to the `ItemCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemCategory" DROP CONSTRAINT "ItemCategory_categoryId_fkey";

-- AlterTable
ALTER TABLE "ItemCategory" DROP COLUMN "categoryId",
ADD COLUMN     "productCategoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemCategory" ADD CONSTRAINT "ItemCategory_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
