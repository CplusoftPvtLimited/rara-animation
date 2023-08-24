const express = require('express');
const router = express.Router();

const {
  createCoinbase,
  getCoinbaseById,
  updateCoinbaseById,
} = require('../controllers/coinbaseController');

router.post('/createCoinbase', createCoinbase);
router.get('/coinbase/:id', getCoinbaseById);
router.put('/coinbase/:id', updateCoinbaseById);

module.exports = router;
