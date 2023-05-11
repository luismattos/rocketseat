import mongoose from "mongoose";
import config from "./config.js";
import loggers from "./utils/loggers.js";

const db = DB();
export default db;

function DB() {
  async function init() {
    const uri = config.db.uri;
    const options = config.db.options;
    const { logger } = loggers;

    await mongoose.connect(uri, options).catch((error) => {
      logger.error(`DB connection (${uri}) error!!!`);
    });

    mongoose.connection.once("open", () => {
      console.info(
        `Connection has been established with the database: ${mongoose.connection.name}`
      );
    });

    if (config.dev) {
      await import("./seeds/resetDB.js").then((resetDB) => resetDB.resetDB());
    }
  }

  return { init };
}
