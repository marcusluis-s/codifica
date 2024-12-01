import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel.js";

export const registerUser = async (c: any) => {
    const { name, email, password } = await c.req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hashedPassword);

    return c.json({ message: "Usuário criado com sucesso!", user });
}

export const loginUser = async (c: any) => {
    const { email, password } = await c.req.json();
    const user = await findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return c.json({ message: "Credenciais inválidas." }, 401);
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
    });

    return c.json({ message: "Login efetuado com sucesso!", token });
}