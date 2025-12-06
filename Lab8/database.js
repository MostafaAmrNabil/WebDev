import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Lab9");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
  }
};

export default connectDB;
