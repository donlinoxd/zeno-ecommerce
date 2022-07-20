import mongoose from "mongoose";
import UserDocument from "./user.interface";

export default interface SessionDocument extends mongoose.Document {
  _id: string;
  userId: UserDocument["_id"];
  userAgent: string;
  valid: boolean;
  createdAt: Date;
  updatedAt: Date;
}
