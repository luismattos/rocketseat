import mongoose from "mongoose";

export default async function clearDatabase() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.drop();
  }
  console.log("Database clear complete");
}
