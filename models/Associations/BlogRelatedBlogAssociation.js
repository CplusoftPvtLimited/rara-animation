const Blog = require("../Blog");
const RelatedBlog = require("../RelatedBlog");

Blog.hasMany(RelatedBlog, {
  foreignKey: "blogId",
  otherKey: "relatedBlogId",
  as: "relatedBlogs",
});

RelatedBlog.belongsTo(Blog, {
  foreignKey: "relatedBlogId",
});

module.exports = { Blog, RelatedBlog };
