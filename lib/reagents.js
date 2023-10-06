import { prisma } from "./prisma.js"

export async function getReagents() {
  try {
    const reagents = await prisma.reagent.findMany()
    return reagents
  } catch (error) {
    return error
  }
}

export async function getReagent(uid) {
  try {
    const areagent = await prisma.reagent.findUnique({
      where:{
        id: uid,
      },
    })
    return areagent
  } catch (error) {
    return error
  }
}

export async function createReagent(reagent) {
  try {
    const reagentFromDB = await prisma.reagent.create({ data: reagent })
    return reagentFromDB
  } catch (error) {
    return error
  }
}

export async function createReagents(reagents) {
  try {
    const reagentsFromDB = await prisma.reagent.createMany({ data: reagents, skipDuplicates: true, })
    return reagentsFromDB
  } catch (error) {
    return error
  }
}


export async function updateReagent(uid, newdata){
  try{

    const updatedReagent = await prisma.reagent.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedReagent

  } catch (error) {
    return error
  }
}


export async function deleteReagent(uid){
  try{

    const deleted = await prisma.reagent.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
