import mongoose from "mongoose";
import ModelNames from "../models/modelNames.js";

class UserClass {
  findSimilarName(name) {
    return this.find({ name });
  }

  static findByEmail(email) {
    return this.findOne({ email });
  }
}

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },

    email: {
      type: mongoose.Schema.Types.String,
      trim: true,
      unique: true,
      index: true,
      required: true,
    },

    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },

    avatar: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: true }
).loadClass(UserClass);

console.log("Indexes: ",UserSchema.indexes());

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
