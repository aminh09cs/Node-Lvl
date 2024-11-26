import { Request, Response } from "express";
import { app } from "./src/app";

const PORT = process.env.PORT || 3056;

app.get("/", (req: Request, res: Response) => {
  res.send("HEHEE2ss");
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
