import NextAuth from "next-auth";
import connectDB from "@/lib/connectDB";
import userModel from "../../../models/userModel"; // Assuming you have a model named 'userModel'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // Import the 'GoogleProvider' from 'next-auth/providers'
import GithubProvider from "next-auth/providers/github"; // Import the 'GithubProvider' from 'next-auth/providers'

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

          console.log(authuser);

          if (!authuser) {
            throw new Error("Invalid email or password");
          }

          // Here, you can create a session and return necessary data
          return {
            status: "authenticated", // Set the status to authenticated
            user: {
              email: authuser.email,
              // Add other relevant fields from the user model
            },
          };
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
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === "google") {
        try {
          // Check if user exists in the database
          console.log(user, account, profile);
          let existingUser = await userModel.findOne({ email: profile.email });
          if (!existingUser) {
            // If user doesn't exist, create a new user in the database
            existingUser = await userModel.create({
              email: profile.email,
              // Add other relevant fields from the profile if needed
            });
          }
          // Return true to indicate successful sign-in
          return true;
        } catch (error) {
          console.error("Error creating user:", error);
          // Return false to indicate sign-in failure
          return false;
        }
      }
      // Continue with sign-in for other providers
      return true;
    },
  },
};

export default NextAuth(authOptions);
