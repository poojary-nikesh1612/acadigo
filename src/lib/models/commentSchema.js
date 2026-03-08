import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const commentsSchema = new mongoose.Schema({
  page_id: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
});

export default mongoose.models.COMMENT ||
  mongoose.model("COMMENT", commentsSchema);
