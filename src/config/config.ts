import { ConfigProps } from 'src/interfaces/config.interface';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    postgresql: {
      port: parseInt(process.env.DB_PORT),
      host: process.env.DB_HOST,
      dbName: process.env.DB,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  },
});
