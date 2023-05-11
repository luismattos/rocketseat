import express from "express";

import config from "./config.js";
import routes from "./routes/routes.js";
import loggers from "./utils/loggers.js";

const server = Server();
export default server;

function Server() {
  function init() {
    const app = express();
    const port = config.server.port;
    const url = config.server.url;

    const { logger, httpLogger } = loggers;

    if (config.dev) {
      logger.warn(`--- DEV MODE ---`);
    }

    app.use(express.json());

    app.use(httpLogger, routes);

    app.listen(port, () => logger.info(`Listening on ${url}!`));
  }

  return { init };
}
