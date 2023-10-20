require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
const profileRoutes = require("./routes/profileRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const checkoutRoute = require("./routes/checkRoute");
const keysRoutes = require("./routes/keysRoutes");
const coinbaseKeysRoutes = require("./routes/coinbaseKeysRoutes");
const bankRoutes = require("./routes/bankRoutes");
const RssFeedRoutes = require("./routes/RssFeedRoutes");

const app = express();
const PORT = process.env.PORT || 4500;
const path = require("path");
sequelize.sync();

// Middleware
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      const url = req.originalUrl;
      if (url.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Blog Route
app.use("/api/blog", blogRoutes);
//Category Route
app.use("/api/category", categoryRoutes);
//Profile Route
app.use("/api/profile", profileRoutes);
//Stripe Payment Route
app.use("/api/checkout", checkoutRoute);
// stripe secrete keys routes
app.use("/api/secret", keysRoutes);
// coinbase secrete keys routes
app.use("/api/secret", coinbaseKeysRoutes);

// bank details
app.use("/api/bank", bankRoutes);

// RSS Route
app.use("/api/news", RssFeedRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
