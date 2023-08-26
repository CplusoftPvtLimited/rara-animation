// const Blog = require('../models/Blog');
const { Category } = require("../models/Category");
const Profile = require("../models/Profile");
const {
  Blog,
  RelatedBlog,
} = require("../models/Associations/BlogRelatedBlogAssociation");

const createBlogPost = async (req, res) => {
  const {
    title,
    content,
    category,
    fellow,
    associatedFellow,
    relatedBlogs,
    region,
    profile,
    imagePath,
  } = req.body;

  console.log("req.body body: ", req.body);

  if (!req.file) {
    return res.status(400).json({ error: "No image provided" });
  }
  if (!title || !content) {
    return res.status(400).json({ error: "Please enter title and content" });
  }

  try {
    const { originalname, path } = req.file;
    console.log("path: ", req.file);
    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path;
    }

    const baseUrl = "http://localhost:4500/";

    const newBlog = await Blog.create({
      imagePath: baseUrl + path,
      title: title,
      content: content,
      category: category,
      fellow: fellow,
      region: region,
      associatedFellow: associatedFellow,
      profile: profile,
    });

    const related_blogs = JSON.parse(relatedBlogs);
    if (related_blogs && related_blogs.length > 0) {
      const relatedBlogData = related_blogs.map((blogId) => ({
        relatedBlogId: blogId,
        blogId: newBlog.id,
      }));
      await RelatedBlog.bulkCreate(relatedBlogData);
    }

    console.log("newBlog: ", newBlog);

    return res
      .status(200)
      .send({ message: "data added successfully", Blog: newBlog });
  } catch (err) {
    console.log("err: ", err);
    res.status(403).json({ err });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogPosts = await Blog.findAll({ order: [["createdAt", "DESC"]] });

    if (!blogPosts.length) {
      return res.status(404).json({ message: "No blog posts found" });
    }

    // Extract unique category IDs
    const categoryIds = [...new Set(blogPosts.map((blog) => blog.category))];

    // Extract unique fellow IDs
    const fellowIds = [...new Set(blogPosts.map((blog) => blog.fellow))];

    // Extract unique fellow IDs
    const associatedfellowIds = [
      ...new Set(blogPosts.map((blog) => blog.associatedFellow)),
    ];

    // Fetch categories in bulk using the unique category IDs
    const categories = await Category.findAll({
      where: { id: categoryIds },
    });

    // Fetch fellows in bulk using the unique fellow IDs
    const fellows = await Profile.findAll({
      where: { id: fellowIds },
    });
    console.log("fellows...................fellows: ", fellows);

    // Fetch fellows in bulk using the unique fellow IDs
    const associfellows = await Profile.findAll({
      where: { id: associatedfellowIds },
    });

    console.log("associfellows: ", associfellows);
    // Create a mapping of category IDs to their data
    const categoryMap = {};
    categories.forEach((category) => {
      categoryMap[category.id] = category;
    });

    // Create a mapping of fellow IDs to their data
    const fellowMap = {};
    fellows.forEach((fellow) => {
      fellowMap[fellow.id] = fellow;
    });

    // Create a mapping of fellow IDs to their data
    const assFellowMap = {};
    associfellows.forEach((fellow) => {
      assFellowMap[fellow.id] = fellow;
    });

    // Combine blog data with corresponding category data
    const blogsWithCategories = blogPosts.map((blog) => ({
      ...blog.toJSON(),
      category: categoryMap[blog.category] || null,
      fellow: fellowMap[blog.fellow] || null,
      associatedFellow: assFellowMap[blog.fellow] || null,
    }));

    res.status(200).send({ blogPosts: blogsWithCategories });
    // res.status(200).send({ blogPosts });
  } catch (err) {
    console.log("err: ", err);
    res.status(403).json({ err });
  }
};

const getBlogPostById = async (req, res) => {
  if (!req.params.id) {
    res
      .status(400)
      .json({ message: "Please add a blog post id to get a blog post" });
  }
  try {
    const blogPost = await Blog.findByPk(req.params.id, {
      include: "relatedBlogs",
    });

    const fellowId = parseInt(blogPost.fellow);
    const associatedFellowId = parseInt(blogPost.associatedFellow);

    const category = await Category.findByPk(blogPost.category);
    const fellow = await Profile.findByPk(fellowId);
    const associatedFellow = await Profile.findByPk(associatedFellowId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    console.log("Blog Post -------------", blogPost);
    // Extract relatedBlogIds from the relatedBlogs
    const relatedBlogIds = blogPost.relatedBlogs.map(
      (relatedBlog) => relatedBlog.relatedBlogId
    );

    console.log("relatedBlogIds: ", relatedBlogIds);
    // Fetch the actual blog data for each related blog
    const relatedBlogData = await Blog.findAll({
      where: {
        id: relatedBlogIds,
      },
    });
    console.log("relatedBlogData: ", relatedBlogData);

    const modifiedBlogPost = {
      ...blogPost.toJSON(), // Convert blogPost to plain object
      relatedBlogs: relatedBlogData, // Replace relatedBlogs with relatedBlogData
      category: category.toJSON(),
      fellow: fellow.toJSON(),
      associatedFellow: associatedFellow.toJSON(),
    };

    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).send({ blogPost: modifiedBlogPost });
  } catch (err) {
    res.status(403).json({ err });
  }
};

const updateBlogPost = async (req, res) => {
  const {
    title,
    content,
    region,
    fellow,
    associatedFellow,
    category,
    profile,
    relatedBlogs,
  } = req.body;

  console.log("req.body...", req.body);
  const blogPost = await Blog.findByPk(req.params.id);
  if (!blogPost) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  blogPost.title = title;
  blogPost.content = content;
  blogPost.region = region;
  blogPost.fellow = fellow;
  blogPost.associatedFellow = associatedFellow;
  blogPost.category = category;
  blogPost.profile = profile;

  const baseUrl = "http://localhost:4500/";
  if (req.file) {
    const imagePath = req.file.path;
    // blogPost.dataValues.imagePath = baseUrl + imagePath;
    blogPost.imagePath = baseUrl + imagePath;
  }

  try {
    await blogPost.save();

    // Delete existing related blogs for the updated blog
    await RelatedBlog.destroy({ where: { blogId: req.params.id } });

    // Create new entries for the updated related blogs
    console.log("relatedBlogs: ", relatedBlogs);
    const related_blogs = JSON.parse(relatedBlogs);

    const updatedRelatedBlogData = related_blogs.map((blogId) => ({
      relatedBlogId: blogId,
      blogId: req.params.id,
    }));

    await RelatedBlog.bulkCreate(updatedRelatedBlogData);

    const updatedBlogPost = await Blog.findByPk(req.params.id);
    res.status(200).json(updatedBlogPost);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const deleteBlogPost = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: "Add a id to delete a blog post" });
  }
  try {
    const blogPost = await Blog.findByPk(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    await RelatedBlog.destroy({
      where: {
        blogId: req.params.id,
      },
    });

    await blogPost.destroy();
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (err) {
    res.status(403).json({ err });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogs,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
