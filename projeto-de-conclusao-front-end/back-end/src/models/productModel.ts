import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/dbConfig";
import Review from "./reviewModel";

interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    description: string;
    averageRating: number;
    imagePath: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id" | "averageRating"> { };

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;
    public averageRating!: number;
    public imagePath!: string;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        averageRating: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: true
    }
);

Product.hasMany(Review, {
    foreignKey: "productId",
    as: "reviews", // Nome da associação (será usado para incluir reviews ao consultar produtos)
});

Review.belongsTo(Product, {
    foreignKey: "productId",
    as: "product", // Nome da associação (será usado para incluir o produto ao consultar reviews)
});

export default Product;