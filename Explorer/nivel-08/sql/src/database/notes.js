import mongoose, { Schema } from "mongoose";

const NoteSchema = Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

NoteSchema.query.byTitle = function (title) {
  return this.where({ title: new RegExp(title, "i") });
};

const NoteModel = mongoose.model("Note", NoteSchema);

export default NoteModel;
