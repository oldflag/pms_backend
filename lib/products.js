import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"


export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include:{
        productCategory:{
          select:{
            name: true,
          }
        },
        _count:{
          select:{boxs: true}
        }
      },
    })
    return products.map(aObject => flattenObject(aObject, ''))
  } catch (error) {
    return error
  }
}

export async function getProduct(uid) {
  try {
    const product = await prisma.product.findUnique({
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
    return flattenObject(product, '')
  } catch (error) {
    return error
  }
}

export async function createProduct(product) {
  try {
    const productFromDB = await prisma.product.create({ data: product })
    return productFromDB
  } catch (error) {
    return error
  }
}

export async function connectBoxs(pid, bids) {
  try {
    const productFromDB = await prisma.product.update({ 
      where:{
        id:pid,
      },
      data:{
        boxs:{
          connect: [{id:bids.id1}, {id:bids.id2}],
        },
      },
      include:{
        boxs: true,
      },
    })
    return productFromDB
  } catch (error) {
    return error
  }
}

export async function createProducts(products) {
  try {
    const productsFromDB = await prisma.product.createMany({ data: products, skipDuplicates: true, })
    return productsFromDB
  } catch (error) {
    return error
  }
}


export async function updateProduct(uid, newdata){
  try{

    const updatedProduct = await prisma.product.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedProduct

  } catch (error) {
    return error
  }
}


export async function deleteProduct(uid){
  try{

    const deleted = await prisma.product.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
