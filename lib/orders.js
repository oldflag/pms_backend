import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"


export async function getOrders() {
  try {
    const orders = await prisma.order.findMany({
      include:{
        productCategory:{
          select:{
            name: true,
          }
        },
        client:{
          select:{
            name: true,
          }
        },
      },
    })
    return orders.map(aObject => flattenObject(aObject, ''))
  } catch (error) {
    return error
  }
}

export async function getOrder(uid) {
  try {
    const order = await prisma.order.findUnique({
      where:{
        id: uid,
      },
      include:{
        productCategory:{
          select:{
            name: true,
          }
        },
        client:{
          select:{
            name: true,
          }
        },
      },
    })
    return flattenObject(order, '')
  } catch (error) {
    return error
  }
}

export async function createOrder(order) {
  try {
    const orderFromDB = await prisma.order.create({ data: order })
    return orderFromDB
  } catch (error) {
    return error
  }
}

export async function createOrders(orders) {
  try {
    const ordersFromDB = await prisma.order.createMany({ data: orders, skipDuplicates: true, })
    return ordersFromDB
  } catch (error) {
    return error
  }
}


export async function updateOrder(uid, newdata){
  try{

    const updatedOrder = await prisma.order.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedOrder

  } catch (error) {
    return error
  }
}


export async function deleteOrder(uid){
  try{

    const deleted = await prisma.order.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
