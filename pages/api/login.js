import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";


export default async function handleLogin(req, res) {

    try {
        
        if (req.method === "POST") {
            const { email, password } = req.body;
            await connectDB();
            const user = await userModel.find({ $and: [{ email }, { password }] });

            if (!user) {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid email or password" });
            }
            res.status(200).json({ success: true, data: user });
        }
        else {
            res.status(400).json({ message: "method not allowed" });
        }

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }


}