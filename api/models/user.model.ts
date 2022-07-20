import cryptoJS from "crypto-js";
import mongoose, { DocumentDefinition } from "mongoose";
import UserDocument from "../interfaces/user.interface";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = cryptoJS.AES.encrypt(
    this.password,
    process.env.CRYPTO_KEY as string
  ).toString();

  next();
});

UserSchema.methods.comparePassword = async function (reqPass: string) {
  const user = this as DocumentDefinition<UserDocument>;

  const origPass = cryptoJS.AES.decrypt(
    user.password,
    process.env.CRYPTO_KEY as string
  ).toString(cryptoJS.enc.Utf8);

  return origPass === reqPass;
};

export default mongoose.model<UserDocument>("User", UserSchema);
