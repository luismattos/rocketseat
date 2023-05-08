import express from "express";
import movieNoteCtrl from "../controllers/movieNoteCtrl.js";
import configBasicRoutes from "./configBasicRoutes.js";

const movieNoteRoutes = MovieNoteRoutes();

export default movieNoteRoutes;

function MovieNoteRoutes() {
  const router = express.Router();

  configBasicRoutes(router, movieNoteCtrl);

  return router;
}
