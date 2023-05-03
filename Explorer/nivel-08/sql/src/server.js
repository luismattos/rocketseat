// import express from "express";
// import routes from "./routes/index.js";
// import SqlConnection from "./database/mongo/index.js";

// const app = express();
// const port = 3000;
// const sqlConnection = SqlConnection();

// app.use(express.json());

// sqlConnection
//   .connect()
//   .then(() => console.log("Connected!"))
//   .catch((e) => console.log("ERRO!!!!!!" + e));

// app.use(routes);

// app.listen(port, () => console.log(`Listening on port ${port}!`));

import * as dotenv from "dotenv";
import DBConnection from "./database/index.js";
import UsersModel from "./database/users.js";

dotenv.config();

const mongoDbUri = process.env.MONGODB_URI;
const dbConnection = DBConnection(mongoDbUri);

dbConnection
  .connect()
  .then(() => console.log("DB Connected!!"))
  .catch((err) => console.error("ERROR!!!", err));

UsersModel.create({
  name: "Paulo",
  email: "luis@gmail.com",
  password: "secret",
});
