import mongoose from "mongoose";

class UserClass {
  findSimilarName(name) {
    return this.find({ name });
  }

  static findByEmail(email) {
    return this.findOne({ email });
  }
}

const UserSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
    },
    email: {
      type: mongoose.Schema.Types.String,
      unique: true,
      index: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
    },
    avatar: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: true }
);

const userSchema = new UserSchema();

userSchema.loadClass(UserClass);

const User = mongoose.model("User", userSchema);

export default User;
