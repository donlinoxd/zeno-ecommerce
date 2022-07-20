import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import hasUser from "./middlewares/hasUser";
import logger from "./middlewares/logger";
import verifyUserAuthorization from "./middlewares/verifyUserAuthorization";

// local modules
import { authRoute, cartRoute, productRoute } from "./routes";

require("dotenv").config();
const app = express();

// mongodb connection
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/zenoecommerce";
mongoose
  .connect(MONGO_URI)
  .then(() => logger.info("MongoDB connected sucessfully"))
  .catch((error) => {
    logger.info(`Error on connecting to MongoDB, ${error}`);
    process.kill(1);
  });

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(verifyUserAuthorization);

//   routes
app.use("/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", hasUser, cartRoute);

// 404
app.use((req: Request, res: Response) =>
  res.status(404).json({ error: "Resource not found" })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
