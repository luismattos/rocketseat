import * as dotenv from "dotenv";

dotenv.config();

export default {
  port: Number(process.env.PORT),
  db: {
    uri: process.env.DB_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // autoIndex: true,
    },
  },
  dev: Boolean(process.env.DEV),
};
