import express, { Application } from "express";
import authRoutes from "./routes/auth";
import productRoutes from "./routes/product";
import cors from "cors";
import path from "path";

const app: Application = express();

// Configura o CORS para receber requisições de todos os domínios
// app.use(cors());

// Permitir requisições de um domínio específico, por exemplo:
app.use(cors({ origin: "http://localhost:5173" }));

// Middlewares
app.use(express.json());

// Middleware para arquivos estáticos
app.use('/public', express.static(path.join(__dirname, "../public")));

// Rotas
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome, /home 🏡" });
});
app.use("/auth", authRoutes);
app.use("/api", productRoutes);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
