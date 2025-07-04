import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [titleSuggestions, setTitleSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  // Fetch jobs matching current filters
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/jobs?title=${title}&location=${location}`);
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Handle title typing with suggestions
  const handleTitleChange = async (e) => {
    const value = e.target.value;
    setTitle(value);

    if (value.trim() === '') {
      setTitleSuggestions([]);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/suggestions?query=${value}&type=title`);
      setTitleSuggestions(res.data);
    } catch (error) {
      console.error('Error fetching title suggestions:', error);
    }
  };

  // Handle location typing with suggestions
  const handleLocationChange = async (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.trim() === '') {
      setLocationSuggestions([]);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/suggestions?query=${value}&type=location`);
      setLocationSuggestions(res.data);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = () => {
    fetchJobs();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-4">
          🌟 ReHire – Unlock Your Next Chapter
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Discover flexible, meaningful opportunities after retirement. Share your experience, mentor the next generation, and keep making a difference.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Search Job Opportunities</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Title search with suggestions */}
            <div className="flex flex-col w-full sm:w-1/2 relative">
              <input
                type="text"
                placeholder="🔎 Enter job title (e.g., Consultant, Mentor)"
                value={title}
                onChange={handleTitleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {titleSuggestions.length > 0 && (
                <ul className="absolute bg-white border mt-1 w-full rounded shadow z-10 max-h-60 overflow-auto">
                  {titleSuggestions.map((t, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setTitle(t);
                        setTitleSuggestions([]);
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={handleSearch}
                className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Search by Title
              </button>
            </div>

            {/* Location search with suggestions */}
            <div className="flex flex-col w-full sm:w-1/2 relative">
              <input
                type="text"
                placeholder="📍 Enter preferred location (e.g., Delhi, Mumbai)"
                value={location}
                onChange={handleLocationChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {locationSuggestions.length > 0 && (
                <ul className="absolute bg-white border mt-1 w-full rounded shadow z-10 max-h-60 overflow-auto">
                  {locationSuggestions.map((loc, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setLocation(loc);
                        setLocationSuggestions([]);
                      }}
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={handleSearch}
                className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Search by Location
              </button>
            </div>
          </div>
        </div>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className={i % 2 === 0 ? 'animate-slide-left-right' : 'animate-slide-right-left'}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">No jobs found. Try different search keywords.</p>
        )}
      </div>

      <footer className="text-center text-sm text-gray-400 mt-10 mb-4">
        © 2025 ReHire. Empowering Experience, Enabling Futures.
      </footer>
    </div>
  );
}
