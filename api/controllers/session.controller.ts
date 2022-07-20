import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import UserDocument from "../interfaces/user.interface";
import { authenticateUser } from "../services/auth.service";
import { createToken } from "../utils/jwt.utils";
import {
  createSession,
  invalidateSession,
} from "./../services/session.service";

export const createSessionHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body as Pick<
    UserDocument,
    "username" | "password"
  >;

  try {
    /**
     * * verify user credential
     * * if authenticated -> creating sessions, access and refresh token for the user, then return user object
     */
    const user = await authenticateUser({ username, password });

    const session = await createSession({
      userId: user._id,
      userAgent: req.headers["user-agent"],
    });

    const accessToken = await createToken(user, { expiresIn: "15m" });
    const refreshToken = await createToken(
      JSON.parse(JSON.stringify(session)),
      { expiresIn: "1y" }
    );

    res.set({
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:3000",
    });

    res.cookie("authorization", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      // TODO: set this to true in production
      // ! httpOnly: true,
    });
    res.cookie("x-refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    res.json(user);
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const invalidateSessionHandler = async (req: Request, res: Response) => {
  try {
    const sessionId = req.params.sessionId;

    await invalidateSession(sessionId);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getSessionHandler = (req: Request, res: Response) => {
  const user = req.user;

  if (user) return res.json({ user });

  res.status(400).json({ user: null });
};
