import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  ClassName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  resourceLink: {
    type: String,
    required: true,
  },
  uploader: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Resource ||
  mongoose.model("Resource", resourceSchema);
