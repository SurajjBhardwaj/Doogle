import connectDB from "@/lib/connectDB";
import userModel from "@/models/userModel";

export default async function updateSocket(req, res) {
  try {
    if (req.method == "POST") {
      const { _id, socketId, userName, query } = req.body;
      await connectDB();

      let user = await userModel.findOne({ _id });
      const newuser = await userModel.findOne({ email: userName });
      console.log(user || newuser);
      if (!user && !newuser) {
        return res
          .status(400)
          .json({ success: false, message: "User not found" });
      }

      if (!user) {
        if (newuser) {
          user = newuser;
        }
      }

      user.connectionType = "reciever";

      user.socketInfo = {
        id: socketId,
        online: true,
        };
        
      await user.save();

      res.status(200).json({ success: true, data: user });
      console.log("perfect");
    } else {
      res.status(400).json({ message: "method not allowed" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
