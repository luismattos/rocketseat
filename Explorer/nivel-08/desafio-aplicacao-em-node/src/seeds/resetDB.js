import seedUser from "./seedUser.js";
import seedMovieNote from "./seedMovieNote.js";
import seedMovieTag from "./seedMovieTag.js";
import clearDatabase from "./clearDB.js";

export async function resetDB() {
  await clearDatabase();
  const userIds = await seedUser();
  const movieNoteIds = await seedMovieNote(userIds);
  const movieTagIds = await seedMovieTag(movieNoteIds);

  return { userIds, movieNoteIds, movieTagIds };
}
