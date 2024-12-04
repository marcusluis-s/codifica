import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com", // Servidor SMTP do Gmail
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export default transporter;