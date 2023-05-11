import UserModel from "../models/userModel.js";

export default function UserServices() {
  async function create({ name, email, password, avatar }) {
    console.log("INSERTING IN DB...");

    const newUser = await UserModel.create({ name, email, password, avatar });
    await newUser.save();

    console.log("INSERTED!!!");

    return newUser;
  }

  return { create };
}
