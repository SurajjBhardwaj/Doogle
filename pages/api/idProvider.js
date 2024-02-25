import connectDB from "@/lib/connectDB";
import RoomId from "@/models/roomIdModel";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
      try {
          
          const { techStack } = req.body;
          
        await  connectDB();
      // Generate a random room id string
      const randomRoomId = Math.random().toString(36).substring(2, 7);

      // Find a room id which is recently created or if the user count is less than 2
          let room = await RoomId.findOne({ $and: [{ joinedPeople: { $lt: 2 } },{lang:techStack}] });

      // If no available room is found, create a new one
      if (!room) {
        room = new RoomId({
          roomId: randomRoomId,
          lang:techStack,
        });
        await room.save();
      } else {
        // If an available room is found, increase the joinedPeople count by 1
        room.joinedPeople += 1;
        await room.save();
      }

      res.status(200).json({ roomId: room.roomId });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
