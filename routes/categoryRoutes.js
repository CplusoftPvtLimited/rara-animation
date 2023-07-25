const express = require('express');
const router = express.Router();

const {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getBlogPostsByTitle,
} = require('../controllers/categoryController');

// Route for creating a new category
router.post('/createCategory', createCategory);
router.get('/', getAllCategory);
router.get('/category/:id', getCategoryById);
router.put('/category/:id', updateCategoryById);
router.delete('/category/:id', deleteCategoryById);

// get all post on the basis of the category
router.get('/categoryTitle', getBlogPostsByTitle);
module.exports = router;
