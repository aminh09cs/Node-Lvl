// import express, { Express, Request, Response } from "express";

// const port = 8000;
// export const app: Express = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("HEHEE");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
import { Request, Response } from "express";
import { app } from "./src/app";

const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("HEHEE2ss");
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
