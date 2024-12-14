import { Router } from "express";
import { addReview, createProduct, getAllProducts, getProductById } from "../controllers/productController";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.post("/:productId/reviews", addReview);

export default router;