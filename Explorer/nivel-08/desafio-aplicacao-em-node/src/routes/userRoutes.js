import express from "express";
import userCtrl from "../controllers/userCtrl.js";
import { check, validationResult } from "express-validator";
import loggers from "../utils/loggers.js";

const userRoutes = UserRoutes();

export default userRoutes;

function UserRoutes() {
  const router = express.Router();

  router.get("/", userCtrl.list);

  router.post(
    "/",
    [
      check("name")
        .exists()
        .trim()
        .isAlpha()
        .isLength({ min: 5, max: 50 })
        .withMessage("O nome deve ter entre 5 e 50 caracteres alfanumericos"),
      check("email").exists().isEmail().withMessage("O email não é válido"),
      check("password")
        .exists()
        .isLength({ min: 8, max: 16 })
        .withMessage("A senha deve ter entre 8 e 16 caracteres"),
      check("avatar")
        .optional()
        .isURL()
        .withMessage("O avatar deve ser uma URL válida"),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return userCtrl.create;
      }
      loggers.logger.error(`Create User Validations: Fail`);
      return res.status(422).json({ errors: errors.array() });
    }
  );

  router.get("/:id", userCtrl.read);
  router.put("/:id",
  [
    check("name")
      .exists()
      .trim()
      .isAlpha()
      .isLength({ min: 5, max: 50 })
      .withMessage("O nome deve ter entre 5 e 50 caracteres alfanumericos"),
    check("email").exists().isEmail().withMessage("O email não é válido"),
    check("password")
      .exists()
      .isLength({ min: 8, max: 16 })
      .withMessage("A senha deve ter entre 8 e 16 caracteres"),
    check("avatar")
      .optional()
      .isURL()
      .withMessage("O avatar deve ser uma URL válida"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return userCtrl.update;
    }
    loggers.logger.error(`Update User Validations: Fail`);
    return res.status(422).json({ errors: errors.array() });
  });

  router.delete("/:id", userCtrl.destroy);

  return router;
}
