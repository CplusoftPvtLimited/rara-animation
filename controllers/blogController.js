// const Blog = require('../models/Blog');

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

    res.status(200).send({ blogPosts });
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
      include: "relatedBlogs", // This should match the 'as' name in the association definition
    });
    console.log("RELATED BLOGS -------------", blogPost);

    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).send({ blogPost });
  } catch (err) {
    res.status(403).json({ err });
  }
};

const updateBlogPost = async (req, res) => {
  const { title, content, region, fellow, category, profile } = req.body;
  console.log("body: ", req.body);
  const blogPost = await Blog.findByPk(req.params.id);
  if (!blogPost) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  blogPost.title = title;
  blogPost.content = content;
  blogPost.region = region;
  blogPost.fellow = fellow;
  blogPost.category = category;
  blogPost.profile = profile;
  console.log("blogPost: ", blogPost);
  const baseUrl = "http://localhost:4500/";
  if (req.file) {
    const imagePath = req.file.path;
    console.log("path: " + imagePath);
    blogPost.dataValues.imagePath = baseUrl + imagePath;
  }
  console.log("blogPost: ", blogPost);

  try {
    await Blog.update(blogPost.dataValues, { where: { id: req.params.id } });
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
