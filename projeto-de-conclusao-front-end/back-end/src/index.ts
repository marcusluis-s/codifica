import express, { Application } from "express";
import authRoutes from "./routes/auth";
import sequelize from "./config/dbConfig";
import cors from "cors";

const app: Application = express();

// Configura o CORS para receber requisições de todos os domínios
// app.use(cors());

// Permitir requisições de um domínio específico, por exemplo:
app.use(cors({ origin: "http://localhost:5173" }));

// Middlewares
app.use(express.json());

// Rotas
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome, /home 🏡" });
});
app.use("/auth", authRoutes);

sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao MySQL");
    })
    .catch((err) => {
        console.error("Erro ao conectgar ao MySQL.", err);
    });

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
