const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Blog = require('./Blog');

const RelatedBlog = sequelize.define('RelatedBlog', {
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

RelatedBlog.belongsTo(Blog, {
  foreignKey: 'relatedBlogId', // This is the foreign key in the RelatedBlog table
});

module.exports = RelatedBlog;
