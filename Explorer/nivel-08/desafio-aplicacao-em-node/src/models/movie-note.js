import mongoose from "mongoose";

class MovieNoteClass {
  static findSimilarUser(userId) {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    return this.find({ user: userObjectId });
  }
}

const MovieNoteSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    rating: { type: Number },
    user: { type: ObjectId, ref: User },
  },
  {
    timestamps: true,
  }
);

const movieNoteSchema = new MovieNoteClass();

movieNoteSchema.loadClass(MovieNoteClass);

const MovieNote = mongoose.model("MovieNote", movieNoteSchema);

export default MovieNote;
