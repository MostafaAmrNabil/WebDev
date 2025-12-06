import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    instructor: String,
    price: Number,
    category: String,
    enrolled: {
      type: Number,
      default: 0,
    },
  },
);

export default mongoose.model("Course", PostSchema);
