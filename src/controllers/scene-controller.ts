import { AuthenticatedRequest } from "@/middlewares";
import sceneService from "@/services/scene-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getAllScenes(req: AuthenticatedRequest, res: Response) {
  try {
    const scenes = await sceneService.getAllScenes();

    return res.status(httpStatus.OK).send(scenes);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send({});
  }
}

export async function getSceneById(req: AuthenticatedRequest, res: Response) {
  const { sceneId } = req.body;

  try {
    const scene = await sceneService.getSceneById(Number(sceneId));

    return res.status(httpStatus.OK).send(scene);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
