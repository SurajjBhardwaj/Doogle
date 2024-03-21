import userModel from "@/models/userModel";
import connectDB from "@/lib/connectDB";
import nodemailer from "nodemailer";


connectDB();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});

export default async function handleSignup(req, res) {

   if(req.method === "POST") {
        
        try {
          const { username, email, password } = req.body;
          console.log(username, email, password);

          console.log("new");
          // const user = await userModel.create({ email, password });
          const existingUser = await userModel.findOne({ email });
          if (existingUser) {
            return res
              .status(400)
              .json({ success: false, message: "User already exists" });
          }

          console.log("new2");

          // create an otp
          const otp = Math.floor(100000 + Math.random() * 900000);
            const otpExpiry = new Date().getTime() + 10 * 60 * 1000; // 10 minutes in milliseconds
            const otpCreationTime = new Date();
            const newuser = new userModel({ name:username, email, password, otp, otpExpiry, otpCreationTime});
            const user = await newuser.save();

            const mailOptions = {
                from: process.env.user,
                to: email,
                subject: "Email Verification",
                text: `Your OTP is ${otp}`,
            };

          console.log("new4");
            const info = await transporter.sendMail(mailOptions);
          console.log(info);
          
          console.log("hey");

          res.status(201).json({ success: true, data: user });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
    
