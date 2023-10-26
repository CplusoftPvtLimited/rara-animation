const Post = require("../models/Post");

const createPost = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const { organizationName, contact, email, number, message } = req.body;
    const post = await Post.create({
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

module.exports = { createPost };
