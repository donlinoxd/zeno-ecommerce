import { NextFunction, Request, Response } from "express";
const hasUser = (req: Request, res: Response, next: NextFunction) => {
  /**
   * * Check if user login/exist, otherwise, send error
   */

  if (req.user) return next();

  res.sendStatus(403);
};

export default hasUser;
