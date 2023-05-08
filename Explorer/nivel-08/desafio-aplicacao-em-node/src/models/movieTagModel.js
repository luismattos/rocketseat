import mongoose from "mongoose";
import currentSchemas from "../migrations/currentSchemas.js";
import ModelNames from "./modelNames.js";

const MovieTagSchema = currentSchemas.MovieTagSchema;

const MovieTagModel = mongoose.model(ModelNames.MovieTag, MovieTagSchema);

export default MovieTagModel;
