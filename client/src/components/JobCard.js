import React, { useState } from 'react';
import ApplyForm from './ApplyForm';

export default function JobCard({ job }) {
  const [showApply, setShowApply] = useState(false);

  return (
    <>
      <div className="border rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white p-6 flex flex-col items-center text-center">
        <img
          src={job.image}
          alt={job.title}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
        />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
        <p className="text-gray-600 mb-2">{job.description}</p>
        <p className="text-sm text-blue-600 font-medium mb-4">📍 {job.location}</p>
        <button
          onClick={() => setShowApply(true)}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2 rounded-full shadow-md transition"
        >
          Apply Now
        </button>
      </div>

      {showApply && (
        <ApplyForm
          jobTitle={job.title}
          onClose={() => setShowApply(false)}
        />
      )}
    </>
  );
}
