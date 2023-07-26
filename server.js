require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4500;

sequelize.sync();
const blogRoutes = require('./routes/blogRoutes');
const profileRoutes = require('./routes/profileRoutes')

// Middleware
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
