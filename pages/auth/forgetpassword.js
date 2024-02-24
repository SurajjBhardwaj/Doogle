import React, { useState } from 'react';

const ForgetPassword = () => {
  // State variables to store input field values
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation if needed

    // Make API call to backend
    setLoading(true);
    try {
      // Your API call code here
      console.log('API call to submit forgot password request');
      // Simulating API call delay for 2 seconds
      console.log(email);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('API call completed');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full sm:w-96 rounded-lg shadow-md p-8">
        <h3 className="text-4xl font-bold text-center mb-6 text-black">Forgot Password</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
            <input type="email" placeholder="Enter your Email" id="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
