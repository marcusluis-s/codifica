import type { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../config/db.js"

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const createUser = async (name: string, email: string, password: string) => {
    const [result] = await pool.query<ResultSetHeader>(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password]
    );

    return result;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const [rows] = await pool.query<User[] & RowDataPacket[]>("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
}