import { prisma } from "./prisma.js"

export async function getProductCategorys() {
  try {
    const productCategorys = await prisma.productCategory.findMany()
    return productCategorys
  } catch (error) {
    return error
  }
}

export async function createProductCategory(productCategory) {
  try {
    const productCategoryFromDB = await prisma.productCategory.create({ data: productCategory })
    return productCategoryFromDB
  } catch (error) {
    return error
  }
}

export async function createProductCategorys(productCategorys) {
  try {
    const productCategorysFromDB = await prisma.productCategory.createMany({ data: productCategorys, skipDuplicates: true, })
    return productCategorysFromDB
  } catch (error) {
    return error
  }
}


export async function updateProductCategory(uid, newdata){
  try{

    const updatedProductCategory = await prisma.productCategory.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedProductCategory

  } catch (error) {
    return error
  }
}


export async function deleteProductCategory(uid){
  try{

    const deleted = await prisma.productCategory.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
