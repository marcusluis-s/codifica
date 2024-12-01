import { Hono } from "hono";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRoutes = new Hono();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

export default userRoutes;