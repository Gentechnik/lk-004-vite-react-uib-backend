import mongoose from "mongoose";

export const mangaSchema = new mongoose.Schema(
  {
    mangaTitle: String,
    description: String,
    img: {
      src: String,
      alt: String,
      title: String,
    },
  },
  {
    collection: "manga",
    timestamps: true,
    versionKey: false,
  }
);

export const Manga = mongoose.model("Manga", mangaSchema);
