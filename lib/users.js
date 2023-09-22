import { prisma } from "./prisma.js"

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return users
  } catch (error) {
    return error
  }
}

export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user })
    return userFromDB
  } catch (error) {
    return error
  }
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { tweets: true }
    })
    return user
  } catch (error) {
    return error
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })
    return user
  } catch (error) {
    return error
  }
}
// export async function updateUser(uid, urole, uactive){
//   try{

//     const updatedUser = await prisma.user.update({
//       where: {
//         id: uid ,
//       },
//       data: {
//         role: urole,
//         active: uactive,
//       },
//     })
//     return updatedUser

//   } catch (error) {
//     return error
//   }
// }

export async function updateUser(uid, newdata){
  try{

    const updatedUser = await prisma.user.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedUser

  } catch (error) {
    return error
  }
}

