var Blog = require('../models/blog').Blog;

const createBlogPost = async (req, res) => {
  const { title, content, category, fellow, region } = req.body;
  console.log('req.body: ', req.body);
  // if (!req.file) {
  //   return res.status(400).json({ error: 'No image provided' });
  // }
  if (!title || !content) {
    return res.status(400).json({ error: 'Please enter title and content' });
  }

  try {
    // const { originalname, path } = req.file;

    // let imagePath = null;
    // if (req.file) {
    //   imagePath = req.file.path;
    // }

    const newBlog = await Blog.create({
      // imagePath: path,
      title: title,
      content: content,
      category: category,
      fellow: fellow,
      region: region,
    });
    return res
      .status(200)
      .send({ message: 'data added successfully', Blog: newBlog });
  } catch (err) {
    console.log('err: ', err);
    res.status(403).json({ err });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogPosts = await Blog.findAll({});

    if (!blogPosts.length) {
      return res.status(404).json({ message: 'No blog posts found' });
    }

    res.status(200).send({ blogPosts });
  } catch (err) {
    res.status(403).json({ err });
  }
};

const getBlogPostById = async (req, res) => {
  if (!req.params.id) {
    res
      .status(400)
      .json({ message: 'Please add a blog post id to get a blog post' });
  }
  try {
    const blogPost = await Blog.findByPk(req.params.id);

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).send({ blogPost });
  } catch (err) {
    res.status(403).json({ err });
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
    await Blog.update(req.body, { where: { id: req.params.id } });
    const updatedBlogPost = await Blog.findByPk(req.params.id);
    res.status(200).json(updatedBlogPost);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const deleteBlogPost = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'Add a id to delete a blog post' });
  }
  try {
    const blogPost = await Blog.findByPk(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    await blogPost.destroy();
    res.status(200).json({ message: 'Blog post deleted successfully' });
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
