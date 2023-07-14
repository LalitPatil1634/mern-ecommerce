import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware";
import { createProductController } from "../controllers/productController";
import formidable from "express-formidable";

const router = express.Router();

// Routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
