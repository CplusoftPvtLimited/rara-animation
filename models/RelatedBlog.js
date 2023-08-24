const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Blog = require("./Blog");

const RelatedBlog = sequelize.define("Related_Blog", {
  relatedBlogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RelatedBlog;
