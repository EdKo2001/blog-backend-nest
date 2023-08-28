/* eslint-disable prettier/prettier */
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_HOST, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSPORT,
    database: process.env.DATABASE_DB,
    entities: [],
    synchronize: true,
  },
});
