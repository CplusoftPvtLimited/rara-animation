const Admin = require("../models/Admin");

const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Admin.findOne({ where: { email } });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User creation failed: Email is already taken" });
    }
    const admin = await Admin.create({ email, password });
    res.status(200).json({ message: "User created successfully", admin });
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ where: { email, password } });
    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Login failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports = { createAdmin, loginAdmin };
