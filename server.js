// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Authentication routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
