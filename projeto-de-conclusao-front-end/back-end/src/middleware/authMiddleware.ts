import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

interface AuthRequest extends Request {
    user?: any;
}

const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Acesso negado. Token não fornecido." });
        return;
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({ message: "Token inválido." });
        return;
    }
};

const authorizeAdmin = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await User.findByPk(req.user.id);

        if (user && user.role === "admin") {
            next();
        } else {
            res.status(403).json({ message: "Acesso negado. Apenas administradores podem acessar essa rota." });
            return;
        }

    } catch (error) {
        res.status(500).json({ message: "Erro ao verificar o papel do usuário." });
        return;
    }
};

export { authenticateUser, authorizeAdmin };