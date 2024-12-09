import dontenv from "dotenv";
import { Sequelize } from "sequelize";

// Carregar variáveis de ambiente
dontenv.config();

// Validação do dialeto
const allowedDialects = ["mysql", "sqlite", "postgres", "mssql"];
if (!allowedDialects.includes(process.env.DB_DIALECT || "")) {
    throw new Error("DB_DIALECT inválido. Use um valor válido como mysql, sqlite, postgres ou mssql.");
}

const sequelize = new Sequelize(
    process.env.DB_NAME || "default_db",
    process.env.DB_USER || "default_user",
    process.env.DB_PASSWORD || "default_password",
    {
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT as "mysql",
        logging: false,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados bem-sucedida.");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao MySQL", error);
    });

// Sincroniza os modelos com o banco de dados
sequelize.sync({ alter: true }) // Use `force: true` para recriar tabelas, ou `alter: true` para ajustar sem perda de dados.
    .then(() => {
        console.log("Tabelas sincronizadas com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar tabelas.", error);
    });

export default sequelize;