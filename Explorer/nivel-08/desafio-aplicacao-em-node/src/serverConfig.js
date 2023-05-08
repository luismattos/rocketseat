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
  crypt: {
    pepper: process.env.CRYPT_PEPPER,
    iterations: parseInt(process.env.CRYPT_ITERATIONS),
    keylen: parseInt(process.env.CRYPT_KEYLEN),
    digest: process.env.CRYPT_DIGEST,
    saltlen: parseInt(process.env.CRYPT_SALTLEN),
  },
};
