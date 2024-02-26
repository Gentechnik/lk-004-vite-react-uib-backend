import dotenv from "dotenv";
import * as tools from "./tools.js";
import * as config from "./config.js";

dotenv.config();

export const backendPort = (): number => {
  return 4822;
};

export const dbUrl = (): string => {
  const dbUrl = process.env.DB_URL;
  if (typeof dbUrl === "string") {
    return dbUrl;
  } else {
    return "";
  }
};

export const backendUrl = (): string => {
  return `http://localhost:${config.backendPort()}`;
};
