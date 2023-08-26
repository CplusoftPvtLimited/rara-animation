const express = require('express');
const router = express.Router();

const {
  createBank,
  getBankDetails,
  updateBankDetailsById,
} = require('../controllers/bankDetailsController');

router.post('/create', createBank);
router.get('/:id', getBankDetails);
router.put('/:id', updateBankDetailsById);
module.exports = router;
