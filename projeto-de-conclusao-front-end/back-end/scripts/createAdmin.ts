import bcrypt from "bcrypt";
import sequelize from "../src/config/dbConfig"
import User from "../src/models/userModel";


const createAdmin = async () => {
    try {
        await sequelize.sync();

        const name = "The Admin";
        const email = "admin@email.com";
        const password = "Admin!123";

        const existingAdmin = await User.findOne({ where: { email } });
        if (existingAdmin) {
            console.log("Administrador já existe.");
            return;
        }

        // Criptogrando a senha super secreta
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criando o Ademiro
        await User.create({
            name,
            email,
            password: hashedPassword,
            role: "admin",
        });

        console.log("Administrador criado com sucesso.");

    } catch (error) {
        console.error("Erro ao criar administrador:", error);
    } finally {
        process.exit();
    }
}

createAdmin();