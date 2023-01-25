import { PrismaClient } from "@prisma/client";
import { Scenes } from "./seedHelper";
const prisma = new PrismaClient();

async function main() {
  await cleanDb();
  await seedScenes();
}

async function cleanDb() {
  await prisma.characterItems.deleteMany({});
  await prisma.enemyItems.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.character.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.item.deleteMany({});
  await prisma.sceneOptions.deleteMany({});
  await prisma.scene.deleteMany({});
  await prisma.enemy.deleteMany({});
  await prisma.option.deleteMany({});
}

async function seedScenes() {
  await prisma.scene.createMany({
    data: Scenes
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
