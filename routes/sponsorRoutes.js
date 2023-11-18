const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
  getPostById,
  deletePost,
} = require("../controllers/sponsorController");

router.post("/createPost", createPost);
router.get("/posts", getAllPost);
router.get("/post/:id", getPostById);
router.get("/post/:id", deletePost);

module.exports = router;
