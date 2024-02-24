import mongoose from "mongoose";

const streakSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true, // Ensures only one streak entry per day
  },
  contribution: {
    type: Number,
    default: 0, // Assuming contribution is a numerical value
  },
});

const expertiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["Exploring", "Beginner", "Intermediate", "Expert"],
  },
  topics: [],
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default: "",
    },
    expertise: [expertiseSchema],
    streaks: [streakSchema], // Adding streaks to the user schema
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("user", userSchema);


