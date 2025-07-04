const jobs = require('../data/jobsData');

const getJobs = (req, res) => {
  res.json(jobs);
};

module.exports = { getJobs };

