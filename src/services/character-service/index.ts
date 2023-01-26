import { notFoundError } from "@/errors";
import characterRepository from "@/repositories/character-repository";
import { cannotCreateCharacter } from "./errors";

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

const characterService = {
  getAliveCharacter,
  createCharacter,
};

export default characterService;
