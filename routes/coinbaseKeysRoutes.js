const express = require('express');
const router = express.Router();

const {
  getCoinbaseById,
  updateCoinbaseById,
} = require('../controllers/coinbaseController');

router.get('/coinbase/:id', getCoinbaseById);
router.put('/coinbase/:id', updateCoinbaseById);

module.exports = router;
