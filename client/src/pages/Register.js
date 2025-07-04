import React from 'react';
import Navbar from '../components/Navbar';

export default function Register() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex justify-center items-center py-16">
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-green-700">Join ReHire Today</h2>
          <p className="text-center text-gray-500 mb-4 text-sm">
            Create your free account and unlock meaningful post-retirement opportunities.
          </p>

          <input
            type="text"
            placeholder="🧑 Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          <input
            type="email"
            placeholder="📧 Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          <input
            type="password"
            placeholder="🔒 Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-400 text-sm">
            Already have an account? <a href="/login" className="text-green-600 hover:underline">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
