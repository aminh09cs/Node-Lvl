import { Request, Response, NextFunction } from "express";
import { AccessService } from "../services/access.service";

export class AccessController {
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    const test = await AccessService.signUp(req.body);
    res.json(test);
  };
}
