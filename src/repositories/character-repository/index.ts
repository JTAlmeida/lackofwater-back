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

async function updateCharacter(characterId: number, charInfo: UpdateCharacterParams) {
  return prisma.character.update({
    where: { id: characterId },
    data: {
      atk: charInfo.atk,
      def: charInfo.def,
      hp: charInfo.hp,
      xp: charInfo.xp,
      lvl: charInfo.lvl,
      isAlive: charInfo.isAlive,
    },
  });
}

export type CreateCharacterParams = Omit<
  Character,
  "id" | "atk" | "def" | "hp" | "xp" | "lvl" | "isAlive" | "createdAt" | "updatedAt"
>;

export type UpdateCharacterParams = Omit<Character, "id" | "userId" | "name" | "createdAt" | "updatedAt">;

const characterRepository = {
  findAliveCharacterByUserId,
  createCharacter,
  updateCharacter,
};

export default characterRepository;
