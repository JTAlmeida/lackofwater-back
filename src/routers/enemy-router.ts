import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getEnemyById } from "@/controllers";

const enemyRouter = Router();

enemyRouter
  .all("/*", authenticateToken)
  .get("/:enemyId", getEnemyById);

export { enemyRouter };
