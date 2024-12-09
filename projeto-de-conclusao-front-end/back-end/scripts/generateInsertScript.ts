import fs from "fs";
import path from "path";

function generateInsertScript() {
    const filePath = path.resolve(__dirname, "../src/data/products.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(rawData);

    const insertStatements = products.map((product: { name: string, price: number, description: string, imagePath: string }) => {
        return `INSERT INTO products (name, price, description, averageRating, imagePath, createdAt, updatedAt) 
                VALUES ('${product.name}', ${product.price}, '${product.description}', 0, '${product.imagePath}', NOW(), NOW());`;
    });

    const outputFilePath = path.join(__dirname, "../src/data/insertProducts.sql");
    fs.writeFileSync(outputFilePath, insertStatements.join("\n"), "utf-8");

    console.log(`Script sql gerado em ${outputFilePath}`);
}

generateInsertScript();