const express = require('express');
const router = express.Router();

// Instead of reading from jobs data, use static location list
const locations = [
  'Delhi',
  'Mumbai',
  'Chennai',
  'Kolkata',
  'Pune',
  'Hyderabad',
  'Bengaluru',
  'Lucknow',
  'Jaipur',
  'Indore',
  'Ahmedabad',
  'Kanpur',
  'Noida',
  'Gurgaon',
  'Patna',
  'Bhopal'
];

router.get('/', (req, res) => {
  const { query, type } = req.query;
  if (!query || !type) {
    return res.status(400).json([]);
  }

  if (type === 'location') {
    // Filter locations starting with the query (case-insensitive)
    const filtered = locations
      .filter(loc => loc.toLowerCase().startsWith(query.toLowerCase()))
      .sort();  // optional: sort alphabetically
    return res.json(filtered);
  }

  // If type is not location, return empty
  res.json([]);
});

module.exports = router;
