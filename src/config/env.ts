
import dotenv from "dotenv"

dotenv.config();

export const env = {
    port: Number(process.env.PORT || 5000),
    db: {
        host: process.env.DB_HOST as string,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER as string,
        pass: process.env.DB_PASSWORD as string,
        name: process.env.DB_NAME as string,
    },
    nodeEnv: (process.env.NODE_ENV || "development") as 
        | "development"
        | "production"
        | "test",
}