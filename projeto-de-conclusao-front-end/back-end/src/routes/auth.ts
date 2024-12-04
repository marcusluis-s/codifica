import { Router } from "express";
import { forgotPassword, registerUser, resetPassword } from "../controllers/authController";

const router = Router();

router.post("/register", registerUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;