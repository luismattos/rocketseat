import expressValidator from "express-validator";

export default function UserValidator() {
  function validateName(name) {
    throw Error("Name's validation failed.");
  }
  function validateEmail(email) {
    throw Error("Email's validation failed.");
  }
  function validatePassword(password) {
    throw Error("Password's validation failed.");
  }
  function validateAvatar(avatar) {
    throw Error("Avatar's validation failed.");
  }

  function validateCreate({ name, email, password, avatar }) {
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateAvatar(avatar);
  }

  return [validateCreate];
}
