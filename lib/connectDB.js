import mongoose from "mongoose";

const connectDB = async (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  } else {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
    return req, res;
  }
};

export default connectDB;
