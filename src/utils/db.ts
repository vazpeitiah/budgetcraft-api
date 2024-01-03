import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 5432,
    database: process.env.DB_NAME ?? 'budgetcraft_db',
    username: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'postgres',
    dialect: 'postgres'
  }
)

export default sequelize
