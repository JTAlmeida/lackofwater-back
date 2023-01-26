import { Character } from "@prisma/client";
import { createUser } from "./users-factory";
import { prisma } from "@/config";

export async function createCharacter(userId: number): Promise<Character> {
  const user = await createUser();

  return prisma.character.create({
    data: {
      userId,
      name: "teste",
    },
  });
}
