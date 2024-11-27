import express, { Request, Response, NextFunction, Router } from "express";
import accessRouter from "./access";

const router: Router = express.Router();

router.use("/v1/api", accessRouter);

export default router;
