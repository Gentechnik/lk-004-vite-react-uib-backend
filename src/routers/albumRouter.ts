import express from "express";
import * as albumControllers from "../controllers/albumControllers.js";

export const albumRouter = express.Router();

albumRouter.route("/").get(albumControllers.getAllAlbums);
