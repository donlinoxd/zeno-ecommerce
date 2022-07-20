import mongoose from "mongoose";

export default interface UserDocument extends mongoose.Document {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(reqPass: string): Promise<boolean>;
}
