import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
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
});
