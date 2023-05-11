import { check, validationResult } from "express-validator";
import loggers from "../utils/loggers.js";

const { logger } = loggers.logger;

const userValidator = UserValidators();
export default userValidator;

function UserValidators(req, res, next) {
  function validateName(req, res, next) {
    console.log("VALIDATING NAME...");
    return check("name")
      .exists()
      .trim()
      .isAlpha()
      .isLength({ min: 5, max: 50 })
      .withMessage("O nome deve ter entre 5 e 50 caracteres alfanumericos");
  }

  function validateEmail(req, res, next) {
    console.log("VALIDATING EMAIL...");
    return check("email")
      .exists()
      .isEmail()
      .withMessage("O email não é válido");
  }

  function validatePassword(req, res, next) {
    console.log("VALIDATING PASSWORD...");
    return check("password")
      .exists()
      .isLength({ min: 8, max: 16 })
      .withMessage("A senha deve ter entre 8 e 16 caracteres");
  }

  function validateAvatar(req, res, next) {
    console.log("VALIDATING AVATAR...");
    return check("avatar")
      .optional()
      .isURL()
      .withMessage("O avatar deve ser uma URL válida");
  }

  return {
    validateName,
    validateEmail,
    validatePassword,
    validateAvatar,
  };
}
