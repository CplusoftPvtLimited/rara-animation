require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const profileRoutes = require('./routes/profileRoutes')
const categoryRoutes = require('./routes/categoryRoutes');


const app = express();
const PORT = process.env.PORT || 4500;
const path = require('path');

sequelize.sync();

// Middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//blog route
app.use('/api/blog', blogRoutes);
//category route
app.use('/api/category', categoryRoutes);
//Profile Route
app.use('/api/profile', profileRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
