import express from "express";

export const handleError = (res: express.Response, error: any) => {
  return res.status(500).json(error);
};
