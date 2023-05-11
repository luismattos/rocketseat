import UserModel from "../models/userModel.js";
import UserServices from "../services/userServices.js";
import loggers from "../utils/loggers.js";

const { logger } = loggers;

const userCtrl = UserCtrl();
export default userCtrl;

function UserCtrl() {
  async function create(req, res, next) {
    const { name, email, password, avatar } = req.body;

    logger.info(`Users Ctrl Create ${(name, email, password, avatar)}`);

    try {
      const newUser = await UserServices().create({
        name,
        email,
        password,
        avatar,
      });

      logger.info(
        `Users Ctrl Create ${(name, email, password, avatar)}: Success`
      );

      res.status(201).json(newUser);
    } catch (error) {
      logger.error(
        `Users Ctrl Create ${(name, email, password, avatar)}: Fail`
      );

      res.status(500).json({
        errorCode: 500,
        message: "Erro interno do servidor: não foi possível criar usuário",
      });
    }
  }

  async function read(req, res) {
    const id = req.params.id;

    logger.info(`Users Ctrl Read ${id}`);

    try {
      const user = await UserModel.findById(id).lean().exec();

      logger.info(`Users Ctrl Read ${id}: Success`);

      res.status(200).json(user);
    } catch (err) {
      logger.error(`Users Ctrl Read ${id}: Fail`);

      res
        .status(500)
        .json({ errorCode: 500, message: "Internal Server Error: Read User" });
    }
  }

  async function list(req, res) {
    try {
      logger.info(`Users Ctrl List`);

      const users = await UserModel.find().exec();

      logger.info(`Users Ctrl List: Success`);

      res.status(200).json(users);
    } catch (err) {
      logger.error(`Users Ctrl List: Fail`);

      res
        .status(500)
        .json({ errorCode: 500, message: "Internal Server Error: List Users" });
    }
  }

  async function update(req, res) {
    const id = req.params.id;

    const { name, email, password, avatar } = req.body;

    logger.info(`Users Ctrl Update ${(name, email, password, avatar)}`);

    try {
      const user = await UserModel.findById(id).exec();

      user.name = name ?? user.name;
      user.email = email ?? user.email;
      user.password = password ?? user.password;
      user.avatar = avatar ?? user.avatar;

      const updatedUser = await user.save();

      logger.info(
        `Users Ctrl Update ${(name, email, password, avatar)}: Success`
      );

      res.status(301).json(updatedUser);
    } catch (err) {
      logger.error(
        `Users Ctrl Update ${(name, email, password, avatar)}: Fail`
      );

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Update User",
      });
    }
  }

  async function destroy(req, res) {
    const id = req.params.id;

    logger.info(`Users Ctrl Destroy ${id}`);

    try {
      const result = await UserModel.deleteOne({ _id: id }).exec();

      logger.info(`Users Ctrl Destroy ${id}: Success`);

      res.status(202).json(result);
    } catch (err) {
      logger.error(`Users Ctrl Destroy ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Destroy User",
      });
    }
  }

  return { create, read, list, update, destroy };
}
