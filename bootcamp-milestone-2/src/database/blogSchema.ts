import { Schema } from "mongoose";
import mongoose from "mongoose";
import { Blog } from "../app/blogData";

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: String, required: false }, //{ type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, requierd: true },
  comments: {
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, requierd: false, default: new Date() },
  },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
