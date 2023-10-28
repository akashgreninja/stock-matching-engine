interface PostgresqlConfigProps {
  port: number;
  host: string;
  dbName: string;
  username: string;
  password: string;
}

export interface ConfigProps {
  port: number;
  database: {
    postgresql: PostgresqlConfigProps;
  };
}
