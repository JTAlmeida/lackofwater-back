import { prisma } from "@/config";
import { Character } from "@prisma/client";

async function findAliveCharacterByUserId(userId: number) {
  return prisma.character.findFirst({ where: { isAlive: true } });
}

async function createCharacter(character: CreateCharacterParams) {
  return prisma.character.create({
    data: {...character},
  });
}

export type CreateCharacterParams = Omit<
  Character,
  "id" | "atk" | "def" | "hp" | "xp" | "lvl" | "isAlive" | "createdAt" | "updatedAt"
>;

const characterRepository = {
    findAliveCharacterByUserId,
    createCharacter
  };
  
  export default characterRepository;