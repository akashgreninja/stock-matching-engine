import {IDatabaseConfigAttributes} from "../../interfaces/database"

export const databaseConfig: IDatabaseConfigAttributes = {
  username: "postgres",
  password: "123456",
  database: "sportshedge",
  host: "127.0.0.1",
  port: 5432,
  dialect: "postgres",
};