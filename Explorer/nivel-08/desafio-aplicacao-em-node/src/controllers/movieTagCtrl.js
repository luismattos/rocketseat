import MovieTagModel from "../models/movieTagModel.js";

const movieTagCtrl = MovieTagCtrl();
export default movieTagCtrl;

function MovieTagCtrl() {
  async function create(req, res) {
    try {
      const { name, movieNote } = req.body;

      const movieTag = await MovieTagModel.create({ name, movieNote });

      res.status(201).json(movieTag);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Create Movie Tag",
      });
    }
  }

  async function read(req, res) {
    try {
      const id = req.params.id;

      const movieTag = await MovieTagModel.findById(id)
        // .populate({ path: "movieNote", populate: { path: "user" } })
        .exec();

      res.status(302).json(movieTag);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Read Movie Tag",
      });
    }
  }

  async function list(req, res) {
    try {
      const movieTags = await MovieTagModel.find().exec();

      res.status(302).json(movieTags);
    } catch (error) {
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

      const movieNote = await MovieTagModel.findById(id).exec();

      movieNote.name = name ?? movieNote.name;

      const updatedMovieNote = await movieNote.save();

      res.status(301).json(updatedMovieNote);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Update Movie Tag",
      });
    }
  }

  async function destroy(req, res) {
    try {
      const id = req.params.id;

      const result = await MovieTagModel.deleteOne({ _id: id }).exec();

      res.status(202).json(result);
    } catch (error) {
      res.status(500).json({
        errorCode: 500,
        message: "Internal Server Error: Delete Movie Tag",
      });
    }
  }

  return { create, read, list, update, destroy };
}
