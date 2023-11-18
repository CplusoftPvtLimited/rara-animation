const DonationPost = require("../models/DonationPost");

const createPost = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const {
      areaOfSupport,
      donationType,
      donation,
      organizationName,
      contact,
      email,
      number,
      message,
    } = req.body;

    const post = await DonationPost.create({
      areaOfSupport,
      donationType,
      donation,
      organizationName,
      contact,
      email,
      number,
      message,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await DonationPost.findAll({});
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await DonationPost.findByPk(postId);

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
    const post = await DonationPost.findByPk(postId);

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
