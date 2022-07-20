import mongoose from "mongoose";

export default interface ProductDocument extends mongoose.Document {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  createAt: Date;
  updatedAt: Date;
}
