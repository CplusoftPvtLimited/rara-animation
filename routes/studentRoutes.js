const express = require("express");
const router = express.Router();
const {
  addStudent,
  getStudent,
  updateStudent,
} = require("../controllers/studentController");

//Add content on student page fro the first time
router.post("/createStudentPage", addStudent);

//Get content from student page
router.get("/getStudentPage/:id", getStudent);

//Update content on student page
router.put("/updateStudentPage/:id", updateStudent);

module.exports = router;
