require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const app = express();
const PORT = process.env.PORT || 4500;
const path = require('path');

sequelize.sync();
const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const profileRoutes = require('./routes/profileRoutes');
const checkoutRoute = require('./routes/checkRoute');

// Middleware
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      const url = req.originalUrl;
      if (url.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//blog route
app.use('/api/blog', blogRoutes);
//category route
app.use('/api/category', categoryRoutes);
//Profile Route
app.use('/api/profile', profileRoutes);
//Stripe Payment Route
app.use('/api/checkout', checkoutRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
