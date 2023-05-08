import mongoose from "mongoose";
import serverConfig from "./serverConfig.js";

export default async function connectDB() {
  const uri = serverConfig.db.uri;
  const options = serverConfig.db.options;

  await mongoose.connect(uri, options).catch((error) => {
    console.error("DB connection error!!!", error);
  });

  mongoose.connection.once("open", () => {
    console.log(
      `Connection has been established with the database: ${mongoose.connection.name}`
    );
  });

  if (serverConfig.dev) {
    await import("./seeds/resetDB.js").then((resetDB) => resetDB.resetDB());
  }
}
