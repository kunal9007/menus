
const { resolve } = require('path');
const { config } = require('dotenv');
const { PrismaClient } = require('@prisma/client');

// Resolve the path to the .env file
const envPath = resolve(__dirname, '../../../apps/api/.env.local');
console.log('envPath', envPath);

// Load environment variables
config({ path: envPath });

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.menu.createMany({
      data: [
        { name: 'Menu 1', description: 'First menu' },
        { name: 'Menu 2', description: 'Second menu' },
      ],
    });
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed script
main();

