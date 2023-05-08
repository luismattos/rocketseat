import MovieNote from "../models/movieNoteModel.js";

export default async function seedMovieNote(userIds = []) {
  const nMovieNotes = 5;

  for (let i = 0; i < nMovieNotes; i++) {
    await MovieNote.create({
      title: "title" + (i + 1),
      user: userIds[i % userIds.length]["_id"],
    });
  }

  console.log("MovieNote seed complete");

  return await MovieNote.find().select("_id").lean().exec();
}
