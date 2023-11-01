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

const adminAccount = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: { role: "admin" },
    });

    // const adminAccount = admin;

    console.log("admin: ", admin);
    if (admin) {
      res.status(200).json({ admin });
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const changeAdminPassword = async (req, res) => {
  console.log("body: ", req.body);
  try {
    const { userId, password } = req.body;

    // Find the admin user by userId
    const adminUser = await Admin.findByPk(userId);
    console.log("adminUser: ", adminUser);

    if (!adminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }

    // Update the password for the admin user
    adminUser.password = password;
    await adminUser.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createAdmin, loginAdmin, adminAccount, changeAdminPassword };
