const Category = require('../models/category').Category;
const Blog = require('../models/blog').Blog;

// Category.hasMany(Blog, { foreignKey: 'id', as: 'blogs' });
// Blog.belongsTo(Category, { as: 'categories' });

Category.hasMany(Blog, {
  foreignKey: 'categoryId',
  as: 'blogs',
});
Blog.belongsTo(Category, { foreignKey: 'categoryId', as: 'categories' });

module.exports = { Category, Blog };
