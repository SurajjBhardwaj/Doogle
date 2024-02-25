import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";

const MAX_WAIT_TIME_MS = 5 * 60 * 1000; // Maximum wait time in milliseconds (5 minutes)

export async function matcher(req, res) {
  let timerId = null;

  const stopChecking = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  try {
    if (req.method === "POST") {
      const { user } = req.body;
      await connectDB();

      const startTimestamp = Date.now();
      timerId = setInterval(async () => {
        const elapsedTime = Date.now() - startTimestamp;
        if (elapsedTime >= MAX_WAIT_TIME_MS) {
          // Stop checking if maximum wait time is exceeded
          stopChecking();
          return;
        }

        // Find users with opposite connection type and are active
        const matchingUsers = await userModel.find({
          _id: { $ne: user._id }, // Exclude the current user
          connectionType: { $ne: user.connectionType }, // Find users with opposite connection type
          active: true, // Only find active users
        });

        if (matchingUsers.length > 0) {
          // Matching user found, stop checking and send response
          stopChecking();
          const randomIndex = Math.floor(Math.random() * matchingUsers.length);
          const randomUser = matchingUsers[randomIndex];
          res.status(200).json({ success: true, data: randomUser });
        }
      }, 10000); // Check every 10 seconds
    } else {
      res.status(400).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  } finally {
    // Ensure timer is stopped when the function exits
    stopChecking();
  }
}
