import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";

export async function matcher(req, res) {
  try {
    if (req.method === "POST") {
      const { user } = req.body;
      await connectDB();

      // Find users with opposite connection type and are active
      const matchingUsers = await userModel.find({
        _id: { $ne: user._id }, // Exclude the current user
        connectionType: { $ne: user.connectionType }, // Find users with opposite connection type
        active: true, // Only find active users
      });

      let randomUser = null;
      if (matchingUsers.length > 0) {
        // Pick a random user from the matching users array
        const randomIndex = Math.floor(Math.random() * matchingUsers.length);
        randomUser = matchingUsers[randomIndex];
      }

      // Return the details of the randomly picked user
      res.status(200).json({ success: true, data: randomUser });
    } else {
      res.status(400).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
