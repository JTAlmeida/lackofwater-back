import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getEnemyByName } from "@/controllers";

const enemyRouter = Router();

enemyRouter
  .all("/*", authenticateToken)
  .get("/:enemyName", getEnemyByName);

export { enemyRouter };
