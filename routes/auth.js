const express = require("express");
const router = express.Router();
const {
  createAdmin,
  loginAdmin,
  adminAccount,
  changeAdminPassword,
} = require("../controllers/authController");

router.post("/createAdmin", createAdmin);
router.post("/loginAdmin", loginAdmin);
router.get("/adminAccount", adminAccount);
router.put("/changeAdminPassword", changeAdminPassword);

module.exports = router;
