import { handleError } from "../tools.js";
import { Game } from "../schemas/gameSchema.js";
import express from "express";

export const getAllGames = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const game = await Game.find();
    res.status(200).json(game);
  } catch (error) {
    handleError(res, error);
  }
};
