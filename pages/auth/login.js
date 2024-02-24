import { Link } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  // State variables for email, password, and loading status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession(); // Get session data and status

  // useEffect to handle session data changes
  useEffect(() => {
    if (status === "authenticated") {
      // User is authenticated, redirect or perform necessary actions
      console.log("User authenticated:", session);
    } else if (status === "error") {
      // Error occurred during authentication
      console.error("Authentication error:", session.error);
    }
  }, [session, status]); // Listen for changes in session data and status

  // Event handler to update email state variable
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler to update password state variable
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Sign in using NextAuth credentials provider
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false, // Do not redirect on success
      });

      // const result = await response.json();
      // console.log(result);

      console.log(response);

      // If signIn succeeds, the user is redirected automatically
      // You can handle success in `useEffect` hook above
    } catch (error) {
      console.error("Error:", error);
      // Handle login failure
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full sm:w-96 rounded-lg shadow-md p-8">
        <h3 className="text-4xl font-bold text-center mb-6 text-black">
          Login
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="-mt-4 text-blue-500 hover:text-blue-600 block text-right"
            >
              Forget Password?
            </a>
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center text-gray-500 mt-4">Or login with</p>
          <div>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              onClick={() => signIn("google")}
            >
              Google
            </button>
          </div>
          <div>
            <button
              type="button"
              className="-mt-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              onClick={() => signIn("github")}
            >
              GitHub
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-blue-500 hover:text-blue-600">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
