import express from "express";
import movieTagCtrl from "../controllers/movieTagCtrl.js";

const movieTagRoutes = MovieTagRoutes();

export default movieTagRoutes;

function MovieTagRoutes() {
  const router = express.Router();

  router.get("/", movieTagCtrl.list);
  router.post("/", movieTagCtrl.create);
  router.get("/:id", movieTagCtrl.read);
  router.put("/:id", movieTagCtrl.update);
  router.delete("/:id", movieTagCtrl.destroy);

  return router;
}
