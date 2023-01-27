import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { createCharacter, getAliveCharacter, updateCharacter } from "@/controllers";

const characterRouter = Router();

characterRouter
  .all("/*", authenticateToken)
  .get("/", getAliveCharacter)
  .post("/", createCharacter)
  .put("/:characterId", updateCharacter);

export { characterRouter };
