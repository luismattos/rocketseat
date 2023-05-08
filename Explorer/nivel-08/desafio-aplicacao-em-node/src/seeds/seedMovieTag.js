import MovieTag from "../models/movieTagModel.js";

export default async function resetMovieTag(movieNoteIds = []) {
  const nMovieTags = 3;

  const movieTags = [];

  for (let i = 0; i < nMovieTags; i++) {
    movieTags.push("name" + (i + 1));
  }

  for (let i = 0; i < movieNoteIds.length; i++) {
    const movieNoteId = movieNoteIds[i];
    for (let j = 0; j < movieTags.length; j++) {
      const movieTag = movieTags[j];
      if (Math.random() < 0.5) {
        await MovieTag.create({
          name: movieTag,
          movieNote: movieNoteId["_id"],
        });
      }
    }
  }

  console.log("MovieTag seed complete");

  return await MovieTag.find().select("_id").lean().exec();
}
