import express from "express";
import movieNoteCtrl from "../controllers/movieNoteCtrl.js";

const movieNoteRoutes = MovieNoteRoutes();

export default movieNoteRoutes;

function MovieNoteRoutes() {
  const router = express.Router();

  router.get("/", movieNoteCtrl.list);
  router.post("/", movieNoteCtrl.create);
  router.get("/:id", movieNoteCtrl.read);
  router.put("/:id", movieNoteCtrl.update);
  router.delete("/:id", movieNoteCtrl.destroy);

  return router;
}
