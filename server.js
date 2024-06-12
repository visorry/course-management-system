const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Authentication routes
app.use('/auth', authRoutes);
// Course management routes
app.use('/courses', courseRoutes);
// Progress tracking routes
app.use('/progress', progressRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
