import UserDocument from "./interfaces/user.interface";

declare module "express-serve-static-core" {
  interface Request {
    user: UserDocument;
  }
}
