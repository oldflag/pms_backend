-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "type" TEXT;

-- CreateTable
CREATE TABLE "CategoryDetail" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "subProtocol" TEXT NOT NULL,
    "orderingNum" INTEGER NOT NULL,

    CONSTRAINT "CategoryDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryDetail" ADD CONSTRAINT "CategoryDetail_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
