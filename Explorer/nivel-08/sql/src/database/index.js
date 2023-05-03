import mongoose from "mongoose";

export default function DBConnection(mongoDbUri) {
  async function connect() {
    await mongoose.connect(mongoDbUri);
  }

  
  return { connect };
}
