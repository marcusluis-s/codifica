import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbConfig";

interface UserAttributes {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public email!: string;
    public password!: string;
    public name!: string;
    public role!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user"
        }
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true
    }
);

export default User;