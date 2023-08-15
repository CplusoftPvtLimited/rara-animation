const express = require('express');
const router = express.Router();

const {
  createKey,
  getAllKeys,
  getKeyById,
  updateKey,
  deleteKey,
} = require('../controllers/keyController');

// Create a new key
router.post('/keys', createKey);

// Get all keys
router.get('/keys', getAllKeys);

// Route for getting a single key by ID
router.get('/:id', getKeyById);

// Update a key
router.put('/keys/:id', updateKey);

// Delete a key
router.delete('/keys/:id', deleteKey);

module.exports = router;
