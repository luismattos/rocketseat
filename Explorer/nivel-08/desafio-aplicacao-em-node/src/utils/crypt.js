import crypto from "crypto";
import serverConfig from "../config.js";

const PEPPER = serverConfig.pepper;
const SEPARATOR = ":";
const DIGEST = "sha512";

const Crypt = Crypts();

export default Crypt;

function Crypts() {
  function encryptPassword(password) {
    const iterations = 1000;
    const saltLen = 16;
    const keyLen = 64;

    const salt = crypto.randomBytes(saltLen).toString("hex");

    const hash = crypto.pbkdf2Sync(
      password + PEPPER,
      salt,
      iterations,
      keyLen,
      DIGEST
    );

    return `${salt}${SEPARATOR}${iterations}${SEPARATOR}${hash.toString(
      "hex"
    )}`;
  }

  function verifyPassword(password, hash) {
    const [salt, iterations, key] = hash.split(SEPARATOR);
    const iterationsInt = parseInt(iterations, 10);
    const hashBuffer = Buffer.from(key, "hex");

    const verifyHash = crypto.pbkdf2Sync(
      password + PEPPER,
      salt,
      iterationsInt,
      hashBuffer.length,
      DIGEST
    );

    return crypto.timingSafeEqual(hashBuffer, verifyHash);
  }

  return { encryptPassword, verifyPassword };
}
