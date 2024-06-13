require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Authentication routes
app.use('/auth', authRoutes);
// Course management routes
app.use('/courses', courseRoutes);
// Progress tracking routes
app.use('/progress', progressRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
