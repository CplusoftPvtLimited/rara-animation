const express = require ('express')
const router = express.Router()
const {
    getAllNews
  } = require('../controllers/RssFeedController');

router.get('/getAllNews', getAllNews)

module.exports = router;
