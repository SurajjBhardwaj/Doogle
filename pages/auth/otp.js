import { Link } from 'lucide-react';
import React, { useState } from 'react';

const OTPVerification = () => {
  // State variables to store input field values
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation if needed

    // Make API call to backend
    setLoading(true);
    try {
      // Your API call code here
      console.log('API call to verify OTP');
      // Simulating API call delay for 2 seconds
      console.log(otp);
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
        <h3 className="text-4xl font-bold text-center mb-6 text-black">Email Verification</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="otp" className="block font-semibold text-gray-700">Enter OTP</label>
            <input type="text" placeholder="Enter OTP" id="otp"
              value={otp} onChange={(e) => setOTP(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <p className="text-center text-gray-500 mt-4">Didn&apos;t receive OTP? <Link href="#" className="text-blue-500 hover:text-blue-600">Resend OTP</Link></p>
        </form>
      </div>
    </div>
  );
}

export default OTPVerification;
