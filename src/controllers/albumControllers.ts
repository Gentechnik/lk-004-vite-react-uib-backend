import { handleError } from "../tools.js";
import { Album } from "../schemas/albumSchema.js";
import express from "express";

export const getAllAlbums = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const album = await Album.find();
    res.status(200).json(album);
  } catch (error) {
    handleError(res, error);
  }
};
