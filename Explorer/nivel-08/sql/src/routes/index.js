import express from "express";
import usersRoutes from "./users.js";

const routes = Routes();

export default routes;

function Routes() {
  const router = express.Router();

  router.use("/users", usersRoutes);

  router.get("/", (req, res) => {
    res.send("Hello World");
  });

  return router;
}
