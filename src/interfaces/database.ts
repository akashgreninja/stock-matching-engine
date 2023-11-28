
  

export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;
  dialect: 'postgres';
  urlDatabase?: string;
}
