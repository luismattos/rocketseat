import MovieNoteModel from "../models/movieNoteModel.js";

const movieNoteCtrl = MovieNoteCtrl();
export default movieNoteCtrl;

function MovieNoteCtrl() {
  async function create(req, res) {
    try {
      const { title, user, description, rating } = req.query;

      const movieNote = await MovieNoteModel.create({
        title,
        user,
        description,
        rating,
      });

      res.status(201).json(movieNote);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Create Movie Note",
      });
    }
  }

  async function read(req, res) {
    try {
      console.log("ENTROU");

      const id = req.params.id;

      console.log(id);

      const note = await MovieNoteModel.findById(id)
        // .populate({ path: "user" })
        .exec();

      res.status(302).json(note);
    } catch (error) {
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
      res.status(302).json(notes);
    } catch (err) {
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

      const { title, description, rating } = req.query;

      const movieNote = await MovieNoteModel.findById(id).exec();

      movieNote.title = title ?? movieNote.title;
      movieNote.description = description ?? movieNote.description;
      movieNote.rating = rating ?? movieNote.rating;

      const updatedMovieNote = await movieNote.save();

      res.status(301).json(updatedMovieNote);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Update Movie Note",
      });
    }
  }

  async function destroy(req, res) {
    try {
      const id = req.params.id;
      const result = await MovieNoteModel.deleteOne({ _id: id }).exec();
      res.status(202).json(result);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Destroy Movie Note",
      });
    }
  }

  return { create, read, list, update, destroy };
}
