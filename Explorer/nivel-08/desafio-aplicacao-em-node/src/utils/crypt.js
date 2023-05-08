import crypto from "crypto";
import serverConfig from "../serverConfig.js";

export default function Crypt() {
  const pepper = serverConfig.pepper;
  const separator = ":";

  function encrypt(password) {
    const iterations = serverConfig.crypt.iterations;
    const keylen = serverConfig.crypt.keylen;
    const digest = serverConfig.crypt.digest;
    const salt = crypto.randomBytes(serverConfig.crypt.saltlen).toString("hex");

    const hash = crypto.pbkdf2Sync(
      password + pepper,
      salt,
      iterations,
      keylen,
      digest
    );

    return `${salt}${separator}${iterations}${separator}${hash.toString(
      "hex"
    )}`;
  }

  function verify(password, hash) {
    const [salt, iterations, key] = hash.split(separator);
    const iterationsInt = parseInt(iterations, 10);
    const hashBuffer = Buffer.from(key, "hex");

    const verifyHash = crypto.pbkdf2Sync(
      password + pepper,
      salt,
      iterationsInt,
      hashBuffer.length,
      "sha512"
    );

    return crypto.timingSafeEqual(hashBuffer, verifyHash);
  }

  return { encryptPassword, verifyPassword };
}
