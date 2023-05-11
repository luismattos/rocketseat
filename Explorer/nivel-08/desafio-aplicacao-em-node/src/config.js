import * as dotenv from "dotenv";

dotenv.config();

export default {
  dev: Boolean(process.env.DEV),

  server: {
    protocol: process.env.SERVER_PROTOCOL,
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT),
    url: `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
    pepper: process.env.SERVER_PEPPER,
  },

  db: {
    uri: `${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    protocol: process.env.DB_PROTOCOL,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // autoIndex: true,
    },
  },
};
