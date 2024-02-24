import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";

connectDB();

export default async function handleSignup(req, res) {

   if(req.method === "POST") {
        
        try {
            const { name, email, password } = req.body;
            console.log(name, email, password);
            // const user = await userModel.create({ email, password });
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ success: false, message: "User already exists" });
            }
            const newuser = new userModel({ name, email, password, });
            const user = await newuser.save();
            res.status(201).json({ success: true, data: user });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
    
