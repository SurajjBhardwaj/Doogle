import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";


export async function handleLeave(req, res) {

    try {

        const { socketId } = req.body;

        await connectDB();
        const user = await userModel.findOne({ "socketInfo.id": socketId });

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        

        user.socketInfo.online = false;
        user.socketInfo.roomName = "";
        user.socketInfo.id = "";
        
        await user.save();

        res.status(200).json({ success: true, message: "User left the room" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error.message });
    }
    
}