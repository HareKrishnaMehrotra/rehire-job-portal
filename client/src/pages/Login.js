import React from 'react';
import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex justify-center items-center py-16">
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-blue-700">Welcome Back to ReHire</h2>
          <p className="text-center text-gray-500 mb-4 text-sm">
            Log in to continue your journey of impactful work after retirement.
          </p>

          <input
            type="email"
            placeholder="📧 Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <input
            type="password"
            placeholder="🔒 Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
