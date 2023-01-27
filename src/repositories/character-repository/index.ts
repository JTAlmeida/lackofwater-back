import { prisma } from "@/config";
import { Character } from "@prisma/client";

async function findAliveCharacterByUserId(userId: number) {
  return prisma.character.findFirst({
    where: { userId, isAlive: true },
    include: {
      CharacterItems: {
        include: { Item: { select: { name: true, description: true } } },
      },
    },
  });
}

async function createCharacter(character: CreateCharacterParams) {
  return prisma.character.create({
    data: { ...character },
  });
}

export type CreateCharacterParams = Omit<
  Character,
  "id" | "atk" | "def" | "hp" | "xp" | "lvl" | "isAlive" | "createdAt" | "updatedAt"
>;

const characterRepository = {
  findAliveCharacterByUserId,
  createCharacter,
};

export default characterRepository;
