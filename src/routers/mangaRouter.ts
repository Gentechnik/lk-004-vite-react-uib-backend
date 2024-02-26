import express from "express";
import * as mangaControllers from "../controllers/mangaControllers.js";

import { getAllManga } from "../controllers/mangaControllers.js";

export const mangaRouter = express.Router();

mangaRouter.route("/").get(getAllManga);
