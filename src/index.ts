import express from "express";
import * as config from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import * as tools from "./tools.js";
import { mangaRouter } from "./routers/mangaRouter.js";
import { gameRouter } from "./routers/gameRouter.js";
import { albumRouter } from "./routers/albumRouter.js";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = config.backendPort() || 3000;

app.get("/", (req, res) => {
  res.json(`Welcome to the Content API`);
});

if (config.dbUrl() !== "" && config.devMode() === false) {
  const connectDB = async () => {
    try {
      const conn = await mongoose.connect(config.dbUrl());
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  //Connect to the database before listening
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in http://localhost:${PORT}`);
    });
  });

  app.use("/manga", mangaRouter);
  app.use("/games", gameRouter);
  app.use("/music", albumRouter);
} else if (config.devMode() === true) {
  const dataDirectory = path.join("src/", "data");
  app.use(express.static(dataDirectory));

  app.get("/:filename", (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(dataDirectory, `${filename}.json`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    res.json(data);
  });
  app.listen(PORT, () => {
    console.log(`Server running in ${config.backendUrl()}`);
  });
}
