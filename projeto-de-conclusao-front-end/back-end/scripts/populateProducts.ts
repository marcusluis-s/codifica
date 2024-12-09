import sequelize from "../src/config/dbConfig";
import fs from 'fs';
import path from 'path';

async function populateProducts() {
    const filePath = path.join(__dirname, '../src/data/insertProducts.sql');
    const sql = fs.readFileSync(filePath, 'utf-8');

    try {
        await sequelize.query(sql); // Executa o SQL no banco configurado no Sequelize
        console.log('Tabelas populadas com sucesso!');
    } catch (error) {
        console.error('Erro ao popular tabelas:', error);
    }
}

populateProducts();
