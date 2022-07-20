import mongoose, { Schema } from "mongoose";
import CartDocument from "../interfaces/cart.interface";

const ItemsSchema = new mongoose.Schema(
  {
    pid: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
  },
  { _id: false }
);

const CartSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [ItemsSchema],
  },
  { timestamps: true }
);

export default mongoose.model<CartDocument>("Cart", CartSchema);
