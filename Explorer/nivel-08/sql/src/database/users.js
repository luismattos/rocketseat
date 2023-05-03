import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
  },
  { timestamps: true }
);

userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

userSchema.query.yEmail = function (email) {
  return this.where({ email: new RegExp(email, "i") });
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
