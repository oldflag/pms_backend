import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const pwd = process.env.TEMPADMIN_PWD || 'admin';
const prisma = new PrismaClient()

async function main() {
  const adminuser = await prisma.user.create({
    data:{
        name: 'temp_admin',
        email: 'temp_admin@email.com',
        role: 'ADMIN',
        password: await bcrypt.hash(pwd, 12),
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })