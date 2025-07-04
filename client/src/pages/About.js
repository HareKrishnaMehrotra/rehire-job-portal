import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">About ReHire — Empowering Experience, Enabling Futures</h1>
        
        <p className="text-gray-700 text-lg mb-6">
          ReHire is not just a job portal — it's a movement to redefine retirement. We believe that experience never retires.
          Our platform is dedicated to helping retired professionals discover meaningful opportunities to share their wisdom,
          stay active, and continue making a difference.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to connect experienced minds with organizations that value their insights, leadership, and problem-solving abilities.
            By bridging the gap between generations, we create a win-win for businesses and retirees alike.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            We envision a world where no experience goes to waste. A world where retirees feel valued, engaged,
            and empowered to shape the future with their knowledge and guidance.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Why Choose ReHire?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🌟 <strong>Curated Opportunities:</strong> We partner with trusted companies looking for mentorship, consulting, and flexible roles.</li>
            <li>🧭 <strong>Easy to Use:</strong> A simple, user-friendly platform to search, apply, and connect.</li>
            <li>🤝 <strong>Human Touch:</strong> Personalized support for both employers and retirees.</li>
            <li>💼 <strong>Meaningful Work:</strong> Roles that respect your expertise while offering purpose and flexibility.</li>
            <li>🌐 <strong>Nationwide Reach:</strong> Opportunities across locations and industries.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Explore Jobs:</strong> Browse roles tailored for retired professionals.</li>
            <li><strong>Apply Easily:</strong> Quick, simple application process.</li>
            <li><strong>Get Matched:</strong> We help connect you with companies seeking your skills.</li>
            <li><strong>Make an Impact:</strong> Share your wisdom, mentor teams, or consult on projects.</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Join Us</h2>
          <p className="text-gray-700">
            At ReHire, we believe retirement is not an end — it's a new beginning.
            Join our growing community and continue shaping the world with your experience.
          </p>
        </div>
      </div>
    </div>
  );
}
