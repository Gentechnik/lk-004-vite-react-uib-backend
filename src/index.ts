import express from "express";
import * as config from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import * as tools from "./tools.js";
import { mangaRouter } from "./routers/mangaRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Welcome to the Content API`);
});

app.use("/manga", mangaRouter);

(async () => {
  try {
    await mongoose.connect(config.dbUrl(), {});
    console.log("Connected to the database");
    app.listen(config.backendPort(), () => {
      console.log(`Server is running on port ${config.backendPort()}`);
    });
  } catch (e) {
    console.log(e.message);
  }
})();
