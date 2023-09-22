import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"


export async function getProductItems() {
  try {
    const productItems = await prisma.productItem.findMany()
    return productItems
  } catch (error) {
    return error
  }
}

export async function getProductItem(uid) {
  try {
    const productItem = await prisma.productItem.findUnique({
      where:{
        id: uid,
      },
    })
    return productItem
  } catch (error) {
    return error
  }
}

export async function createProductItem(productItem) {
  try {
    const productItemFromDB = await prisma.productItem.create({ data: productItem })
    return productItemFromDB
  } catch (error) {
    return error
  }
}

export async function createProductItems(productItems) {
  try {
    const productItemsFromDB = await prisma.productItem.createMany({ data: productItems, skipDuplicates: true, })
    return productItemsFromDB
  } catch (error) {
    return error
  }
}


export async function updateProductItem(uid, newdata){
  try{

    const updatedProductItem = await prisma.productItem.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedProductItem

  } catch (error) {
    return error
  }
}


export async function deleteProductItem(uid){
  try{

    const deleted = await prisma.productItem.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
