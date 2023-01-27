import { notFoundError } from "@/errors";
import characterRepository from "@/repositories/character-repository";
import { Character } from "@prisma/client";
import { cannotCreateCharacter, cannotUpdateCharacter } from "./errors";

async function getAliveCharacter(userId: number) {
  const aliveChar = await characterRepository.findAliveCharacterByUserId(userId);

  if (!aliveChar) {
    throw notFoundError();
  }

  return aliveChar;
}

async function createCharacter(userId: number, name: string) {
  const checkAliveCharacter = await characterRepository.findAliveCharacterByUserId(userId);

  if (checkAliveCharacter) {
    throw cannotCreateCharacter();
  }

  const characterData = {
    userId,
    name,
  };

  await characterRepository.createCharacter(characterData);

  const newChar = await characterRepository.findAliveCharacterByUserId(userId);

  return newChar;
}

async function updateCharacter(userId: number, characterId: number, charInfo: UpdateCharacterParams) {
  const checkAliveCharacter = await characterRepository.findAliveCharacterByUserId(userId);

  if (!checkAliveCharacter) {
    throw cannotUpdateCharacter();
  }

  const updatedChar = await characterRepository.updateCharacter(characterId, charInfo);

  return updatedChar;
}

export type UpdateCharacterParams = Omit<Character, "id" | "userId" | "name" | "createdAt" | "updatedAt">;

const characterService = {
  getAliveCharacter,
  createCharacter,
  updateCharacter,
};

export default characterService;
