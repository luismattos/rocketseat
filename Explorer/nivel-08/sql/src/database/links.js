import mongoose, { Schema } from "mongoose";

const LinkSchema = Schema(
  {
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const LinkModel = mongoose.model("Link", LinkSchema);

export default LinkModel;
