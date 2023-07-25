require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4500;

sequelize.sync();
const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const { Category, Blog } = require('./models/association');
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//route
// app.use('/api', blogRoutes);
app.use('/api', categoryRoutes);

// Sync the models with the database
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Models synced with the database.');
  })
  .catch((err) => {
    console.error('Error syncing models with the database:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
