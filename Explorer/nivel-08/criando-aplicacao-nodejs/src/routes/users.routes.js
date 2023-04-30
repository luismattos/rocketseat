import express from "express";
import UsersCtrl from "../controllers/usersCtrl.js";

const usersRoutes = UserRoutes();

export default usersRoutes;

function UserRoutes() {
  const usersRoutes = express.Router();
  const usersCtrl = UsersCtrl();

  usersRoutes.get("/", (req, res) => res.send("User: Hello World!"));

  usersRoutes.post("/", isAdminMiddleware, usersCtrl.create);

  return usersRoutes;
}

function isAdminMiddleware(req, res, next) {
  const { isAdmin } = req.body;

  if (!isAdmin) {
    return res.status(401).send("Unauthorized user.");
  }
  
  next();
}
