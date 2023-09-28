import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"


export async function getBoxs() {
  try {
    const boxs = await prisma.box.findMany({
      include:{
        product:{
          select:{
            name: true,
          }
        },
      },
    })
    return boxs.map(aObject => flattenObject(aObject, ''))
  } catch (error) {
    return error
  }
}

export async function getBox(uid) {
  try {
    const box = await prisma.box.findUnique({
      where:{
        id: uid,
      },
      include:{
        product:{
          select:{
            name: true,
          }
        },
      },
    })
    return flattenObject(box, '')
  } catch (error) {
    return error
  }
}

export async function createBox(box) {
  try {
    const boxFromDB = await prisma.box.create({ data: box })
    return boxFromDB
  } catch (error) {
    return error
  }
}

export async function createBoxs(boxs) {
  try {
    const boxsFromDB = await prisma.box.createMany({ data: boxs, skipDuplicates: true, })
    return boxsFromDB
  } catch (error) {
    return error
  }
}


export async function updateBox(uid, newdata){
  try{

    const updatedBox = await prisma.box.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedBox

  } catch (error) {
    return error
  }
}


export async function deleteBox(uid){
  try{

    const deleted = await prisma.box.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
