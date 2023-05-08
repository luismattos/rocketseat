import mongoose from "mongoose";
import ModelNames from "../models/modelNames.js";
import serverConfig from "../serverConfig.js";

class MovieNoteClass {
  static findSimilarUser(userId) {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    return this.find({ user: userObjectId });
  }
}

export const MovieNoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: { type: String },

    rating: { type: Number },
    
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ModelNames.User,
      required: true,
    },
  },
  {
    timestamps: true,
  }
).loadClass(MovieNoteClass);

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
