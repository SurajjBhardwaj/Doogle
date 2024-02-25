import mongoose from "mongoose"


const roomIdSchema = new mongoose.Schema({

    roomId: {
        type: String,
        required: true,
        unique: true
    },
    joinedPeople: {
        type: Number,
        default: 1,
        max: 2
    }
});

mongoose.models = {};
export default mongoose.model("roomId", roomIdSchema);

