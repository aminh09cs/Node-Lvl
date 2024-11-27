import express, { Request, Response, NextFunction, Router } from "express";
import { AccessController } from "../../controllers/access.controller";

const router: Router = express.Router();
const accessController = new AccessController();

router.post("/shop/sign-up", accessController.signUp);

export default router;
