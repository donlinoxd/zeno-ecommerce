import { Request, Response } from "express";
import UserDocument from "../interfaces/user.interface";
import Cart from "../models/cart.model";

export const getCart = async (req: Request, res: Response) => {
  const { _id } = req.user as UserDocument;

  try {
    const cart = await Cart.findOne({ userId: _id });

    res.json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const addCartItem = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user._id;
  const pid = req.body.pid as string;

  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $push: { items: { pid } } },
      { new: true }
    );

    if (!cart) {
      const newCart = new Cart({ userId, items: [{ pid }] });

      const savedCart = await newCart.save();

      return res.json(savedCart);
    }

    res.json({ cart });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteCartItem = (req: Request, res: Response) => {};
