import UserModel from "../models/userModel.js";
import UserServices from "../services/userServices.js";
import UserValidator from "../services/userValidators.js";

const userCtrl = UserCtrl();
export default userCtrl;

function UserCtrl() {
  async function create(req, res) {
    const { name, email, password, avatar } = req.body;

    try {
      const newUser = await UserServices().create({
        name,
        email,
        password,
        avatar,
      });
      res.status(201).json(newUser);
    } catch (error) {
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

    const { name, email, password, avatar } = req.body;

    try {
      const user = await UserModel.findById(id).exec();

      user.name = name ?? user.name;
      user.email = email ?? user.email;
      user.password = password ?? user.password;
      user.avatar = avatar ?? user.avatar;

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
