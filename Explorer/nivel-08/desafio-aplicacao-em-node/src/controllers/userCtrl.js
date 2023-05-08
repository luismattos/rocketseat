import UserModel from "../models/userModel.js";

const userCtrl = UserCtrl();
export default userCtrl;

function UserCtrl() {
  async function create(req, res) {
    const { name, email, password, avatar } = req.query;

    try {
      const newUser = await UserModel.create({ name, email, password, avatar });
      await newUser.save();
      res.status(201).json(newUser);
      console.log("Create User: Success!");
    } catch (error) {
      console.error("Create User Fail: ");
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Create User",
      });
    }
  }

  async function read(req, res) {
    const id = req.params.id;

    try {
      const user = await UserModel.findById(id).lean().exec();

      res.status(200).json(user);
    } catch (err) {
      res
        .status(500)
        .json({ errorCode: 500, message: "Internal Server Error: Read User" });
    }
  }

  async function list(req, res) {
    try {
      const users = await UserModel.find().exec();

      res.status(200).json(users);
    } catch (err) {
      res
        .status(500)
        .json({ errorCode: 500, message: "Internal Server Error: List Users" });
    }
  }

  async function update(req, res) {
    const id = req.params.id;

    const newName = req.query.name;
    const newEmail = req.query.email;
    const newPassword = req.query.password;
    const newAvatar = req.query.avatar;

    try {
      const user = await UserModel.findById(id).exec();

      user.email = newEmail ?? user.email;
      user.name = newName ?? user.name;
      user.password = newPassword ?? user.password;
      user.avatar = newAvatar ?? user.avatar;

      const updatedUser = await user.save();

      res.status(301).json(updatedUser);
    } catch (err) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Update User",
      });
    }
  }

  async function destroy(req, res) {
    const id = req.params.id;

    try {
      const result = await UserModel.deleteOne({ _id: id }).exec();
      res.status(202).json(result);
    } catch (err) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Destroy User",
      });
    }
  }

  return { create, read, list, update, destroy };
}
