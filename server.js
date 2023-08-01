require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');
const profileRoutes = require('./routes/profileRoutes')

const app = express();
const PORT = process.env.PORT || 4500;

sequelize.sync();

// Middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//blog route
app.use('/api/blog', blogRoutes);
//Profile Route
app.use('/api/profile', profileRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
