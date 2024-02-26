import mongoose from "mongoose";

export const gameSchema = new mongoose.Schema(
  {
    gameTitle: String,
    description: String,
    img: {
      src: String,
      alt: String,
      title: String,
    },
  },
  {
    collection: "games",
    timestamps: true,
    versionKey: false,
  }
);

export const Game = mongoose.model("Game", gameSchema);
