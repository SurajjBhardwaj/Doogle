import mongoose from "mongoose";

const roomIdSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      unique: true,
    },
    joinedPeople: {
      type: Number,
      default: 1,
      max: 2,
        },
    lang: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("roomId", roomIdSchema);
