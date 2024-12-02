import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
import transporter from '../config/email';

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }

        const token = jwt.sign({ email }, 'chave_secreta', { expiresIn: '1h' });
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
        const { email } = jwt.verify(token, 'chave_secreta') as { email: string };
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
