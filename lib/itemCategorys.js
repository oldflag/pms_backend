import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"


export async function getItemCategorys() {
  try {
    const itemCategorys = await prisma.itemCategory.findMany({
      include:{
        productCategory:{
          select:{
            name: true,
          }
        },
      },
    })
    return itemCategorys.map(aObject => flattenObject(aObject, ''))
  } catch (error) {
    return error
  }
}

export async function getItemCategory(uid) {
  try {
    const itemCategory = await prisma.itemCategory.findUnique({
      where:{
        id: uid,
      },
      include:{
        productCategory:{
          select:{
            name: true,
          }
        },
      },
    })
    return flattenObject(itemCategory, '')
  } catch (error) {
    return error
  }
}

export async function createItemCategory(itemCategory) {
  try {
    const itemCategoryFromDB = await prisma.itemCategory.create({ data: itemCategory })
    return itemCategoryFromDB
  } catch (error) {
    return error
  }
}

export async function createItemCategorys(itemCategorys) {
  try {
    const itemCategorysFromDB = await prisma.itemCategory.createMany({ data: itemCategorys, skipDuplicates: true, })
    return itemCategorysFromDB
  } catch (error) {
    return error
  }
}


export async function updateItemCategory(uid, newdata){
  try{

    const updatedItemCategory = await prisma.itemCategory.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedItemCategory

  } catch (error) {
    return error
  }
}


export async function deleteItemCategory(uid){
  try{

    const deleted = await prisma.itemCategory.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
