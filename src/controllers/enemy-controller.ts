import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getEnemyByName(req: Request, res: Response) {

  try {
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send({});
  }
}
