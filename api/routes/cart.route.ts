import express from "express";
import {
  getCart,
  deleteCartItem,
  addCartItem,
} from "../controllers/cart.controller";
import hasUser from "../middlewares/hasUser";
const router = express.Router();

router.get("/", getCart);
router.post("/", addCartItem);
router.delete("/:userId", deleteCartItem);

export default router;
