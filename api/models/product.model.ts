import mongoose from "mongoose";
import ProductDocument from "../interfaces/product.interface";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ProductDocument>("Product", ProductSchema);
