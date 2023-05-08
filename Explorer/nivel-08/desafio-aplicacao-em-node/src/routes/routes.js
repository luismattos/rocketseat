import express from "express";
import userRoutes from "./userRoutes.js";
import movieNoteRoutes from "./movieNoteRoutes.js";
import movieTagRoutes from "./movieTagRoutes.js";

const routes = await Routes();
export default routes;

async function Routes() {
  const router = express.Router();

  router.get("/", async (req, res) => res.send("GET: Hello World!"));

  router.use("/users", userRoutes);
  router.use("/notes", movieNoteRoutes);
  router.use("/tags", movieTagRoutes);

  return router;
}
