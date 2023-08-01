const Blog = require('../models/Blog');

const createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  if (!req.file) {
    return res.status(400).json({ error: 'No image provided' });
  }
  if (!title || !content) {
    return res.status(400).json({ error: 'Please enter title and content' });
  }

  try {
    const { originalname, path } = req.file;

    let imagePath = null;
    if (req.file) {
      imagePath = path;
    }

    const baseUrl = "http://localhost:4500/"

    const newBlog = await Blog.create({
      title: title,
      content: content,
      imagePath: baseUrl + path,
    });
    return res
      .status(200)
      .send({ message: 'data added successfully', Blog: newBlog });
  } catch (err) {
    res.status(500).json({ error: 'Error uploading post : ', err });
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.findAll();

    if (!blogPosts.length) {
      return res.status(404).json({ message: 'No blog posts found' });
    }

    res.status(200).send({ blogPosts });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog posts' });
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.id);

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).send({ blogPost });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog post' });
  }
};

const updateBlogPost = async (req, res) => {
  const { title, content } = req.body;
  const blogPost = await Blog.findByPk(req.params.id);
  if (!blogPost) {
    return res.status(404).json({ error: 'Blog post not found' });
  }

  if (title) {
    blogPost.title = title;
  }
  if (content) {
    blogPost.content = content;
  }
  if (req.file) {
    const { path } = req.file;
    blogPost.imagePath = path;
  }

  try {
    await blogPost.save();
    res.status(200).json(blogPost);
  } catch (err) {
    console.error('Error updating blog post:', err);
    res.status(500).json({ error: 'Error updating blog post' });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    await blogPost.destroy();
    res.json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog post:', err);
    res.status(500).json({ error: 'Error deleting blog post' });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
