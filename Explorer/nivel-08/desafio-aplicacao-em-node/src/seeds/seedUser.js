import User from "../models/userModel.js";

export default async function seedUser() {
  const nUsers = 3;

  for (let i = 0; i < nUsers; i++) {
    await User.create({
      name: "user" + (i + 1),
      email: "email" + (i + 1),
      password: "password" + (i + 1),
    });
  }

  console.log("User seed complete");

  const users = await User.find().select("_id").lean().exec();

  return users;
}
