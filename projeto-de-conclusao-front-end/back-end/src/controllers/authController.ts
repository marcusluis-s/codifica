import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
import transporter from '../config/email';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    try {
        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: "Já existe um usuário registrado com esse e-mail." });
            return;
        }

        // Cripgrafa a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria o novo usuário
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // Quando um novo usuário é criado com sucesso no banco de dados,
        // o Sequelize retorna um objeto contendo as informações não-sensíveis do usuário.
        // A resposta JSON enviando ao cliente ajuda o frontend a saber que o registro
        // foi bem-sucedido e fornece os dados necessário para, por exemplo,
        // exibir o nome do usuário na interface.
        res.status(200).json({
            message: "Usuário registrado com sucesso!",
            user: { id: newUser.id, name: newUser.name, email: newUser.email },
        });

    } catch (error) {
        console.error("Erro ao registrar usuário: " + error);
        res.status(500).json({ message: "Erro ao registrar usuário: " + error });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado." });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Credenciais inválidas." });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer Login.", error });
    }
}

// Envia um e-mail com um link para redefinir a senha
export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        const link = `http://localhost:3000/reset-password?token=${token}`;

        await transporter.sendMail({
            to: email,
            subject: 'Redefinição de Senha',
            html: `<p>Clique no link abaixo para redefinir sua senha:</p><a href="${link}">${link}</a>`,
        });

        res.status(200).json({ message: 'E-mail enviado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao enviar e-mail', error: err });
    }
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    const { token, newPassword } = req.body;

    try {
        const { email } = jwt.verify(token, process.env.JWT_SECRET!) as { email: string };
        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Senha redefinida com sucesso' });
    } catch (err) {
        res.status(400).json({ message: 'Token inválido ou expirado', error: err });
    }
};
