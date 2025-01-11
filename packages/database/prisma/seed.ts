import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';


import { resolve } from 'path';
// console.log("dir", __dirname)
console.log(resolve(__dirname, '../../../apps/api/.env.local'));

const envPath = resolve(__dirname, '../../../apps/api/.env.local')
console.log("envPath", envPath)

config({ path: envPath });
const prisma = new PrismaClient();

async function main() {
  await prisma.menu.createMany({
    data: [
      { name: 'Menu 1', description: 'First menu' },
      { name: 'Menu 2', description: 'Second menu' },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

