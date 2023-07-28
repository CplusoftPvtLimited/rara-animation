const express = require('express');
const router = express.Router();

const {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require('../controllers/categoryController');

// Route for creating a new category
router.post('/createCategory', createCategory);
router.get('/', getAllCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategoryById);
router.delete('/:id', deleteCategoryById);
module.exports = router;
