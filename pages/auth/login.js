import { Link } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router"; // Import useRouter hook from next/router

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("session",session);
      console.log("User authenticated:", session);
      router.push("/");
    } else if (status === "error") {
      console.error("Authentication error:", session.error);
    }
  }, [session, status, router]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // const response = await signIn("credentials", {
      //   email,
      //   password,
      //   redirect: false,
      // });

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      console.log("result", result);
      if (response.ok) {
        console.log("User authenticated:", result);
        localStorage.setItem("user", JSON.stringify(result.data[0]));
        router.push("/");
      } else {
        console.error("Authentication error:", result);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
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
          {/* Additional field for forget password */}
          <div className="mt-10">
            <Link
              href="#"
              className="-mt-4 text-blue-500 hover:text-blue-600 block text-right"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {/* Buttons for logging in with Google and GitHub */}
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
