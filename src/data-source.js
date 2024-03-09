// src/data-source.ts
import { DataSource } from "typeorm";
require("dotenv").config({ path: "../.env" });

export const AppDataSource = new DataSource({
  type: "mysql", // или любой другой тип БД
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "1111",
  database: "ritual",
  migrations: ["src/migration/**/*.ts"], // Укажите путь к вашим файлам миграции
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
