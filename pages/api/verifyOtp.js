import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";

connectDB();

export default async function handleSignup(req, res) {
    if (req.method === "POST") {
        try {
            const { otp } = req.body;
            const user = await userModel.findOne({ otp });
            if (!user) {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid OTP" });
            }
            if (user.otpExpiry < new Date().getTime()) {
                return res
                    .status(400)
                    .json({ success: false, message: "OTP expired" });
            }
            user.isEmailVerified = true;
            user.otp = "";
            user.otpExpiry = "";
            user.otpCreationTime = "";
            await user.save();

            res.status(200).json({ success: true, data: user });

        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }

    } else {
        res.status(400).json({ message: "method not allowed" });
    }

}