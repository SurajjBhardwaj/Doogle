import React, { useState } from 'react';

const Login = () => {
  // State variables for email, password, and loading status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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

    // Make API call to backend (replace 'your-api-endpoint' with actual endpoint)
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(email,password);

      if (response.ok) {
        // Handle successful login
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full sm:w-96 rounded-lg shadow-md p-8">
        <h3 className="text-4xl font-bold text-center mb-6 text-black">Login</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
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
            <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
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
            <a href="#" className="-mt-4 text-blue-500 hover:text-blue-600 block text-right">Forget Password?</a>
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="text-center text-gray-500 mt-4">Or login with</p>
          <div>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Google
            </button>
          </div>
          <div>
            <button
              type="button"
              className="-mt-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              GitHub
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-4">Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-600">Create Account</a></p>
      </div>
    </div>
  );
}

export default Login;
