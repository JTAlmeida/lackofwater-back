import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getItemById } from "@/controllers";

const itemRouter = Router();

itemRouter
  .all("/*", authenticateToken)
  .get("/:itemId", getItemById);

export { itemRouter };