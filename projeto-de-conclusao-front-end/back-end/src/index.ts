import express, { Application } from "express";
import authRoutes from "./routes/auth";
import sequelize from "./config/dbConfig";

const app: Application = express();

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
