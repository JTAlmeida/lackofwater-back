import { ApplicationError } from "@/protocols";

export function cannotCreateCharacter(): ApplicationError {
  return {
    name: "CannotCreateCharacter",
    message: "You already have an alive character!",
  };
}
