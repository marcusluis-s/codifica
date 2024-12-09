import { Router } from "express";
import { addReview, createProduct, getAllProducts } from "../controllers/productController";

const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.post("/:productId/reviews", addReview);

export default router;