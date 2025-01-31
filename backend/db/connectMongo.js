import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB\n" + error);
    process.exit(1);
  }
};
export default connectMongo;
