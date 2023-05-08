import UserModel from "../models/userModel.js";
import UserValidator from "./userValidators.js";

export default function UserServices() {
  async function create({ name, email, password, avatar }) {
    const newUser = await UserModel.create({ name, email, password, avatar });
    await newUser.save();
    return newUser;
  }

  return { create };
}
