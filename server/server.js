const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const jobsRoutes = require('./routes/jobs');
app.use('/jobs', jobsRoutes);


const suggestionRoutes = require('./routes/suggestions');
app.use('/suggestions', suggestionRoutes);


app.listen(5000, () => console.log('Server started on port 5000'));
