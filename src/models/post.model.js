import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
