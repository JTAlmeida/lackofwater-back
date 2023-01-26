import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { createCharacter, getAliveCharacter } from "@/controllers";

const characterRouter = Router();

characterRouter
  .all("/*", authenticateToken)
  .get("/", getAliveCharacter)
  .post("/", createCharacter);

export { characterRouter };
