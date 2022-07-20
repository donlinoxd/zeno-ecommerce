import { DocumentDefinition, Error } from "mongoose";
import Product from "../models/product.model";
import { Request, Response } from "express";
import ProductDocument from "../interfaces/product.interface";

export const getProducts = async (req: Request, res: Response) => {
  try {
    // TODO: add filter queries functionality
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(400).json({ error, message: "Cannot get the products" });
  }
};

export const getSingleProduct = async (req: Request, res: Response) => {
  const pid = req.params.productId;

  try {
    const product = await Product.findById(pid);

    res.json(product);
  } catch (error) {
    if (error instanceof Error && error.name === "CastError") {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(400).json("something went wrong");
  }
};

export const addProducts = async (req: Request, res: Response) => {
  const { title, description, image, price } =
    req.body as DocumentDefinition<ProductDocument>;

  try {
    const product = new Product({ title, description, price, image });
    const savedProduct = await product.save();

    res.json(savedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};
