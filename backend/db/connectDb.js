import mongoose from "mongoose";
import { DB_NAME, MONGODB_URI } from "../constants/constants.js";

const connectDb = async () => {
  try {
    const conenctionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `DB Connected Successfully with ${conenctionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    throw new Error("Failed to connect to database");
  }
};

export default connectDb;
