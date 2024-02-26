import { handleError } from "../tools.js";
import { Manga } from "../schemas/mangaSchema.js";
import express from "express";

export const getAllManga = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const manga = await Manga.find();
    res.status(200).json(manga);
  } catch (error) {
    handleError(res, error);
  }
};
