import MovieNoteModel from "../models/movieNoteModel.js";
import loggers from "../utils/loggers.js";

const { logger } = loggers;

const movieNoteCtrl = MovieNoteCtrl();
export default movieNoteCtrl;

function MovieNoteCtrl() {
  async function create(req, res) {
    try {
      const { title, user, description, rating } = req.body;

      logger.info(
        `Movie Note Ctrl Create ${(title, user, description, rating)}`
      );

      const movieNote = await MovieNoteModel.create({
        title,
        user,
        description,
        rating,
      });

      logger.info(
        `Movie Note Ctrl Create ${(title, user, description, rating)}: Success`
      );

      res.status(201).json(movieNote);
    } catch (error) {
      logger.error(
        `Movie Note Ctrl Create ${(title, user, description, rating)}: Fail`
      );

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Create Movie Note",
      });
    }
  }

  async function read(req, res) {
    try {
      const id = req.params.id;

      logger.info(`Movie Note Ctrl Read ${id}`);

      const note = await MovieNoteModel.findById(id)
        // .populate({ path: "user" })
        .exec();

      logger.info(`Movie Note Ctrl Read ${id}: Success`);

      res.status(302).json(note);
    } catch (error) {
      logger.error(`Movie Note Ctrl Read ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Read Movie Note",
      });
    }
  }

  async function list(req, res) {
    try {
      const notes = await MovieNoteModel.find()
        // .populate({ path: "user" })
        .exec();

      logger.info(`Movie Note Ctrl List`);

      res.status(302).json(notes);
    } catch (err) {
      logger.error(`Movie Note Ctrl List: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: List Movie Notes",
      });
    }
  }

  async function update(req, res) {
    try {
      //TODO

      const id = req.params.id;

      const { title, description, rating } = req.body;

      logger.info(`Movie Note Ctrl Update ${id}`);

      const movieNote = await MovieNoteModel.findById(id).exec();

      movieNote.title = title ?? movieNote.title;
      movieNote.description = description ?? movieNote.description;
      movieNote.rating = rating ?? movieNote.rating;

      const updatedMovieNote = await movieNote.save();

      logger.info(`Movie Note Ctrl Update ${id}: Success`);

      res.status(301).json(updatedMovieNote);
    } catch (error) {
      logger.error(`Movie Note Ctrl Update ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Update Movie Note",
      });
    }
  }

  async function destroy(req, res) {
    try {
      const id = req.params.id;

      logger.info(`Movie Note Ctrl Destroy ${id}`);

      const result = await MovieNoteModel.deleteOne({ _id: id }).exec();

      logger.info(`Movie Note Ctrl Destroy ${id}: Success`);

      res.status(202).json(result);
    } catch (error) {
      logger.error(`Movie Note Ctrl Destroy ${id}: Fail`);

      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Destroy Movie Note",
      });
    }
  }

  return { create, read, list, update, destroy };
}
