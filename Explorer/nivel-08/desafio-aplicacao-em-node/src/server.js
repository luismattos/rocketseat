import express from "express";

import serverConfig from "./serverConfig.js";
import connectDB from "./db.js";
import routes from "./routes/routes.js";

console.log("Dev Mode: ", serverConfig.dev);

connectDB().then(() => serverRun());

export default function serverRun() {
  const app = express();
  const port = serverConfig.port;

  app.use(express.json());

  app.use("/", routes);

  app.listen(port, () => console.log(`Listening on port ${port}!`));
}
