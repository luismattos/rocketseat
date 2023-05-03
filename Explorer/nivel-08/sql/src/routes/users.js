import express from "express";

const usersRoutes = UsersRoutes();

export default usersRoutes;

function UsersRoutes() {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send("USERS: Hello World!!");
  });

  return router;
}
