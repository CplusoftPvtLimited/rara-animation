const SponsorshipPost = require("../models/SponsorshipPost");

const createPost = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const { organizationName, contact, email, number, message, donation } =
      req.body;

    const post = await SponsorshipPost.create({
      organizationName,
      contact,
      email,
      number,
      message,
      donation,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await SponsorshipPost.findAll({});
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  console.log("postId: ", postId);
  try {
    const post = await SponsorshipPost.findByPk(postId);

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await SponsorshipPost.findByPk(postId);

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    await post.destroy();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createPost, getAllPost, getPostById, deletePost };
