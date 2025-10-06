
import { Sequelize } from "sequelize";
import { env } from "./env";


export const sequelize = new Sequelize(env.db.name, env.db.user, env.db.pass, {
    host: env.db.host,
    port: env.db.port,
    dialect: "mysql",
    logging: false,
    pool: {
        max: 10,
        min: 2,
        acquire: 30000,
        idle: 10000
    }
})

export async function connectAndSync() {
    await sequelize.authenticate();
    console.log("✅ Connected To Database!");

    await sequelize.sync({ alter: true });
    // await sequelize.sync();

    console.log("✅ Tables Created Or Updated!");
}