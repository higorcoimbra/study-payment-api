import { DataSource } from "typeorm";
import Sale from "./entities/Sale";
import Item from "./entities/Item";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "payment_db",
    synchronize: true,
    logging: true,
    entities: [Sale, Item],
    subscribers: [],
    migrations: [],
})