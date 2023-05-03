import mongoose, { Schema } from "mongoose";

const TagSchema = Schema({
  name: { type: String, required: true },
});

const TagModel = mongoose.model("Tag", TagSchema);

export default TagModel;
