import express from "express";
import userCtrl from "../controllers/userCtrl.js";

const userRoutes = UserRoutes();

export default userRoutes;

function UserRoutes() {
  const router = express.Router();

  router.get("/", userCtrl.list);
  router.post("/", userCtrl.create);
  router.get("/:id", userCtrl.read);
  router.put("/:id", userCtrl.update);
  router.delete("/:id", userCtrl.destroy);

  return router;
}
