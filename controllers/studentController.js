const Student = require("../models/studentPage");

const addStudent = async (req, res) => {
  try {
    const {
      about,
      program,
      businessPassage,
      specializedField,
      externalCommittee,
      outline,
      targetAudience,
      responsibilities,
      recruitment,
    } = req.body;

    const requiredFields = [
      "program",
      "businessPassage",
      "specializedField",
      "externalCommittee",
      "outline",
      "targetAudience",
      "responsibilities",
    ];

    for (key of requiredFields) {
      if (!req.body[key]) {
        return res.status(400).json({ error: `${key} is required` });
      }
    }
    const newStudent = await Student.create({
      about,
      program,
      businessPassage,
      specializedField,
      externalCommittee,
      outline,
      targetAudience,
      responsibilities,
      recruitment,
    });

    return res.status(200).json({ newStudent });
  } catch (err) {
    res.status(403).json(err.message);
  }
};

// Update student Page Content
const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  console.log(
    "🚀 ~ file: studentController.js:53 ~ updateStudent ~ studentId:",
    studentId
  );
  console.log("*****Req.Body: ", req.body);
  try {
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ error: "No Info Found" });
    }

    // Assign new values to updatedFields
    const updatedFields = {
      about: req.body.about || student.about,
      program: req.body.program || student.program,
      businessPassage: req.body.businessPassage || student.businessPassage,
      specializedField: req.body.specializedField || student.specializedField,
      externalCommittee:
        req.body.externalCommittee || student.externalCommittee,
      outline: req.body.outline || student.outline,
      targetAudience: req.body.targetAudience || student.targetAudience,
      responsibilities: req.body.responsibilities || student.responsibilities,
      recruitment: req.body.recruitment || student.recruitment,
    };

    await student.update(updatedFields);

    const updatedStudent = await Student.findByPk(studentId);
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(403).json(err.message);
  }
};

// Get Student Page Content

const getStudent = async (req, res) => {
  try {
    const student = await Student.findAll();
    if (!student.length) {
      return res.status(404).json({ message: "No student page content found" });
    }

    res.status(200).send({ student });
  } catch (err) {
    console.log("err: ", err);
    res.status(403).json(err.message);
  }
};

module.exports = { addStudent, updateStudent, getStudent };
