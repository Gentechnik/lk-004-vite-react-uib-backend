import express from "express";
import * as gameControllers from "../controllers/gameControllers.js";

export const gameRouter = express.Router();

gameRouter.route("/").get(gameControllers.getAllGames);
