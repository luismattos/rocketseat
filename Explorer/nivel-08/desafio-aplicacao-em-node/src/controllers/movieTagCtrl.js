import MovieTagModel from "../models/movieTagModel.js";
import loggers from "../utils/loggers.js";

const { logger } = loggers;

const movieTagCtrl = MovieTagCtrl();
export default movieTagCtrl;

function MovieTagCtrl() {
  async function create(req, res) {
    try {
      const { name, movieNote } = req.body;

      logger.info(`Movie Tag Ctrl Create ${(name, movieNote)}`);

      const movieTag = await MovieTagModel.create({ name, movieNote });

      logger.info(`Movie Tag Ctrl Create ${(name, movieNote)}: Success`);

      res.status(201).json(movieTag);
    } catch (error) {
      logger.error(`Movie Tag Ctrl Create ${(name, movieNote)}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Create Movie Tag",
      });
    }
  }

  async function read(req, res) {
    try {
      const id = req.params.id;

      logger.info(`Movie Tag Ctrl Read ${id}`);

      const movieTag = await MovieTagModel.findById(id)
        // .populate({ path: "movieNote", populate: { path: "user" } })
        .exec();

      logger.info(`Movie Tag Ctrl Read ${id}: Success`);

      res.status(302).json(movieTag);
    } catch (error) {
      logger.error(`Movie Tag Ctrl Read ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Read Movie Tag",
      });
    }
  }

  async function list(req, res) {
    try {
      logger.info(`Movie Tag Ctrl List`);

      const movieTags = await MovieTagModel.find().exec();

      logger.info(`Movie Tag Ctrl List: Success`);

      res.status(302).json(movieTags);
    } catch (error) {
      logger.error(`Movie Tag Ctrl List : Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: List Movie Tags",
      });
    }
  }

  async function update(req, res) {
    try {
      const id = req.params.id;
      const { name } = req.body;

      logger.info(`Movie Tag Ctrl Update ${id}`);

      const movieNote = await MovieTagModel.findById(id).exec();

      movieNote.name = name ?? movieNote.name;

      const updatedMovieNote = await movieNote.save();

      logger.info(`Movie Tag Ctrl Update ${id}: Success`);

      res.status(301).json(updatedMovieNote);
    } catch (error) {
      logger.error(`Movie Tag Ctrl Update ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Update Movie Tag",
      });
    }
  }

  async function destroy(req, res) {
    try {
      const id = req.params.id;

      logger.info(`Movie Tag Ctrl Destroy ${id}`);

      const result = await MovieTagModel.deleteOne({ _id: id }).exec();

      logger.info(`Movie Tag Ctrl Destroy ${id}: Success`);

      res.status(202).json(result);
    } catch (error) {
      logger.error(`Movie Tag Ctrl Destroy ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Delete Movie Tag",
      });
    }
  }

  return { create, read, list, update, destroy };
}
