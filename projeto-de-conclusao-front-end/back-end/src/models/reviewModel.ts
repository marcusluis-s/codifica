import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/dbConfig";
import Product from "./productModel";

interface ReviewAttributes {
    id: number;
    productId: number;
    comment: string;
    rating: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> { };

class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
    public id!: number;
    public productId!: number;
    public comment!: string;
    public rating!: number;
}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
    },
    {
        sequelize,
        modelName: "Review",
        tableName: "reviews",
        timestamps: true
    }
);

export default Review;