// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // When database connects
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    // Get MongoDB URI from .env file
    let mongodbURI = process.env.MONGODB_URI;
    const projectName = "resume-builder";

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable not set");
    }

    // If using local dev environment, append project name
    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    // Remove the extra comma and space
    await mongoose.connect(`${mongodbURI}/${projectName}`);

    
    
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

export default connectDB;