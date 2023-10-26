const express = require("express");
const router = express.Router();
const { createAdmin, loginAdmin } = require("../controllers/authController");

router.post("/createAdmin", createAdmin);
router.post("/loginAdmin", loginAdmin);

module.exports = router;
