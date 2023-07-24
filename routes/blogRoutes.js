const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerMid');
const {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
} = require('../controllers/blogController');

// Route for creating a new blog post
router.post('/createBlog', upload.single('imagePath'), createBlogPost);

// Route for getting all blog posts
router.get('/getAllBlogPosts', getAllBlogPosts);

// Route for getting a single blog post by ID
router.get('/:id', getBlogPostById);

// Update a blog post by ID
router.patch('/:id', updateBlogPost);

// Route for deleting a blog post by ID
router.delete('/:id', deleteBlogPost);

module.exports = router;
