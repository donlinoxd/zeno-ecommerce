import { Request, Response } from "express";
import { createUser } from "../services/auth.service";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);

    res.status(201).json(user);
  } catch (error: any) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: `${Object.keys(error.keyValue)[0]} already exists` });
    }

    res.status(500).json(error);
  }
};
