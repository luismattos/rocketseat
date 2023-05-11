import db from "./db.js";
import server from "./server.js";
import loggers from "./utils/loggers.js";

startApp();

async function startApp() {
  await db.init();

  server.init();
}
