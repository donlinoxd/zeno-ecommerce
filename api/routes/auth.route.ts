import express, { Request, Response } from "express";
import { createUserHandler } from "../controllers/auth.controller";
import {
  createSessionHandler,
  invalidateSessionHandler,
} from "../controllers/session.controller";
import hasUser from "../middlewares/hasUser";
import validateRequest from "../middlewares/validateRequest";
import { userLoginSchema } from "../schema/user.schema";
import { createUserSchema } from "../schema/user.schema";

const router = express.Router();

// register a user
router.post("/register", createUserHandler);

// create a session / login the user
router.post("/sessions", createSessionHandler);

router.get("/sessions", (req: Request, res: Response) => {
  const user = req.user;
  res.json(user);
});

// invalidate session / logout the user
router.delete("/sessions/:sessionId", hasUser, invalidateSessionHandler);

export default router;
