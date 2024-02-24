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
  topics: [String], // Assuming topics is an array of strings
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
      unique: true, // Ensure unique email addresses
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      default: "",
    },
    otpExpiry: {
      type: Date,
    },
    otpCreationTime: {
      type: Date,
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
    socketInfo: {
      id: {
        type: String,
        default: "",
      },
      online: {
        type: Boolean,
        default: false,
      },
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // Assuming there's a Message model for chat messages
      },
    ],
    connection: {
      type: Boolean,
      default: false,
    },
    expertise: [expertiseSchema],
    streaks: [streakSchema], // Adding streaks to the user schema
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("user", userSchema);
