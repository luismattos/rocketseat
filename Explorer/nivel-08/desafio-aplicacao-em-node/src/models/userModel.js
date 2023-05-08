import mongoose from "mongoose";
import currentSchemas from "../migrations/currentSchemas.js";
import ModelNames from "./modelNames.js";

const UserSchema = currentSchemas.UserSchema;

const UserModel = mongoose.model(ModelNames.User, UserSchema);

export default UserModel;
