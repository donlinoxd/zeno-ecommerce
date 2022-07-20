import express from "express";
import {
  getProducts,
  getSingleProduct,
} from "../controllers/product.controller";
const router = express.Router();

router.get("/", getProducts);
router.get("/:productId", getSingleProduct);

export default router;
