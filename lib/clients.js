import { prisma } from "./prisma.js"

export async function getClients() {
  try {
    const clients = await prisma.client.findMany()
    return clients
  } catch (error) {
    return error
  }
}

export async function createClient(client) {
  try {
    const clientFromDB = await prisma.client.create({ data: client })
    return clientFromDB
  } catch (error) {
    return error
  }
}

export async function createClients(clients) {
  try {
    const clientsFromDB = await prisma.client.createMany({ data: clients, skipDuplicates: true, })
    return clientsFromDB
  } catch (error) {
    return error
  }
}


export async function updateClient(uid, newdata){
  try{

    const updatedClient = await prisma.client.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedClient

  } catch (error) {
    return error
  }
}


export async function deleteClient(uid){
  try{

    const deleted = await prisma.client.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
