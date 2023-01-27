import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getAllScenes, getSceneById } from "@/controllers";

const sceneRouter = Router();

sceneRouter
  .all("/*", authenticateToken)
  .get("/", getAllScenes)
  .get("/:sceneId", getSceneById);

export { sceneRouter };