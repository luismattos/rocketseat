import pinoPretty from "pino-pretty";
import pino from "pino";
import pinoHttp from "pino-http";

const loggers = Loggers();
export default loggers;

function Loggers() {
  const prettyStream = pinoPretty({
    colorize: true,
    translateTime: "SYS:standard",
  });

  const logger = pino({
    transport: {
      target: "pino-pretty",
      // options: {
      //   colorize: true,
      //   translateTime: "SYS:standard",
      // },
      stream: prettyStream,
    },
  });

  const httpLogger = pinoHttp({
    logger: logger.child({ serializers: pino.stdSerializers }),
    stream: prettyStream,
  });

  return { logger, httpLogger };
}
