import { Router } from "express";
import {
    addReview,
    createProduct,
    getAllProducts,
    getProductById
} from "../controllers/productController";
import { authenticateUser, authorizeAdmin } from "../middleware/authMiddleware";
import upload from "../config/multerConfig";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

// A rota para criar produtos está protegida
router.post(
    "/products",
    authenticateUser,
    authorizeAdmin,
    upload,
    createProduct
);

router.post("/:productId/reviews", addReview);

export default router;