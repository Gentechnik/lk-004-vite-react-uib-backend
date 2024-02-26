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

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.dbUrl(), {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB().then(() => {
  app.listen(config.backendPort, () => {
    console.log("listening for requests");
  });
});
