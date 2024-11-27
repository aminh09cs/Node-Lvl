import { Request, Response } from "express";
import app from "./src/app";

const PORT = process.env.PORT || 3056;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
