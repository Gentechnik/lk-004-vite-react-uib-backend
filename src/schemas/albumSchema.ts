import mongoose from "mongoose";

export const albumSchema = new mongoose.Schema(
  {
    bandName: String,
    albumName: String,
    description: String,
    img: {
      src: String,
      alt: String,
      title: String,
    },
  },
  {
    collection: "music",
    timestamps: true,
    versionKey: false,
  }
);

export const Album = mongoose.model("Album", albumSchema);
