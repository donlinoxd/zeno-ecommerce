import mongoose from "mongoose";
import ProductDocument from "./product.interface";
import UserDocument from "./user.interface";

export default interface CartDocument extends mongoose.Document {
  _id: string;
  userId: UserDocument["_id"];
  items: { pid: ProductDocument["_id"]; quantity: number }[];
  createAt: Date;
  updatedAt: Date;
}
