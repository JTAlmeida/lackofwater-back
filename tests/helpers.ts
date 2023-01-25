import * as jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { createUser } from "./factories";
import { createSession } from "./factories/sessions-factory";
import { prisma } from "@/config";

export async function cleanDb() {
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

export async function generateValidToken(user?: User) {
  const incomingUser = user || (await createUser());
  const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

  await createSession(token);

  return token;
}
