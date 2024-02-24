import NextAuth from "next-auth";
import connectDB from "@/lib/connectDB";
import userModel from "../../../models/userModel"; // Assuming you have a model named 'userModel'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // Import the 'GoogleProvider' from 'next-auth/providers'
import GithubProvider from "next-auth/providers/github";// Import the 'GithubProvider' from 'next-auth/providers'

connectDB(); // Connect to MongoDB

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          console.log(email, password);
          const authuser = await userModel.findOne({ email });

          if (!authuser || !authuser.comparePassword(password)) {
            throw new Error("Invalid email or password");
          }

          return authuser;
        } catch (error) {
          throw new Error("Authentication failed");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
};

export default NextAuth(authOptions);
