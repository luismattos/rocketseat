import express from "express";
import movieTagCtrl from "../controllers/movieTagCtrl.js";
import configBasicRoutes from "./configBasicRoutes.js";

const movieTagRoutes = MovieTagRoutes();

export default movieTagRoutes;

function MovieTagRoutes() {
  const router = express.Router();

  configBasicRoutes(router, movieTagCtrl);

  return router;
}
