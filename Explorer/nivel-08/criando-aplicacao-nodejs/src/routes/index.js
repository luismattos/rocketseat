import express from "express";
import usersRoutes from "./users.routes.js";

const routes = express.Router();

routes.use("/users", usersRoutes);

routes.get("/", (req, res) => res.send("Hello World!"));

export default routes;
