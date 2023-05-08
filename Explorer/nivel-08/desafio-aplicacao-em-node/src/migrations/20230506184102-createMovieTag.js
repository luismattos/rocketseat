import mongoose from "mongoose";
import ModelNames from "../models/modelNames.js";

class MovieTagClass {
  findSimilarMovieNote(movieNoteId) {
    const movieNoteObjectId = new mongoose.Types.ObjectId(movieNoteId);
    return this.find({ movieNotes: movieNoteObjectId });
  }
}

export const MovieTagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  
  movieNote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ModelNames.MovieNote,
    required: true,
  },
}).loadClass(MovieTagClass);

export const up = async (db, client) => {
  // TODO write your migration here.
  // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
  // Example:
  // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
};

export const down = async (db, client) => {
  // TODO write the statements to rollback your migration (if possible)
  // Example:
  // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
};
