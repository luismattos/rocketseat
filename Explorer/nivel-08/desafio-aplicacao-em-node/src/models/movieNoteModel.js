import mongoose from "mongoose";
import currentSchemas from "../migrations/currentSchemas.js";
import ModelNames from "./modelNames.js";

const MovieNoteSchema = currentSchemas.MovieNoteSchema;

const MovieNoteModel = mongoose.model(ModelNames.MovieNote, MovieNoteSchema);

export default MovieNoteModel;
