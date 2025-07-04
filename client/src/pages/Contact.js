import React from 'react';
import Navbar from '../components/Navbar';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          We’d love to hear from you! Connect with us through any of the following ways.
        </p>

        <div className="space-y-4 text-gray-700 text-lg">
          <div className="flex items-center space-x-3">
            <FiMail className="text-blue-600" size={24} />
            <a href="mailto:harekrishnamehrotra11@gmail.com" className="hover:underline">
              harekrishnamehrotra11@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FiPhone className="text-green-600" size={24} />
            <a href="tel:+917619810446" className="hover:underline">
              +91-7619810446
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FiMapPin className="text-red-600" size={24} />
            <span>390, Chowk, Ayodhya, India</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-700" size={24} />
            <a
              href="https://www.linkedin.com/in/hare-krishna11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaGithub className="text-black" size={24} />
            <a
              href="https://https://github.com/HareKrishnaMehrotra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
