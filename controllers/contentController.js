const path = require("path");

const Content = require("../models/Content");

const createContent = async (req, res) => {
  console.log("req.body: ", req.body);
  const { firstName, lastName, phoneNumber, email, school, focusArea } =
    req.body;
  console.log("req.files: ", req.files);
  try {
    // Extract file buffers from the request
    const referenceLetter = req.files["referenceLetter"][0].path;
    const resume = req.files["resume"][0].path;
    const statement = req.files["statement"][0].path;

    console.log("referenceLetter: ", referenceLetter);
    console.log("resume: ", resume);
    console.log("statement: ", statement);

    const content = await Content.create({
      // ...req.body,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      school: school,
      focusArea: focusArea,
      referenceLetter: referenceLetter,
      resume: resume,
      statement: statement,
    });
    console.log("content: ", content);

    res.status(201).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getContents = async (req, res) => {
  try {
    const contents = await Content.findAll({});
    res.status(200).json({ contents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContentById = async (req, res) => {
  const contentId = req.params.id;
  try {
    const content = await Content.findByPk(contentId);

    if (!content) {
      return res.status(404).json({ error: "Content not found" });
    }
    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const downloadFile = async (req, res) => {
  try {
    const content = await Content.findByPk(req.params.id);
    console.log("content: ", content);
    if (!content) {
      return res.status(404).send("File not found");
    }

    let filePath;

    // Determine the file path based on the fileType parameter
    switch (req.params.fileType) {
      case "referenceLetter":
        filePath = content.referenceLetter;
        break;
      case "resume":
        filePath = content.resume;
        break;
      case "statement":
        filePath = content.statement;
        break;
      default:
        return res.status(400).send("Invalid file type");
    }

    console.log("req.params.fileType: ", req.params.fileType);
    console.log("filePath: ", filePath);
    const fileName = path.basename(filePath);
    console.log("fileName: ", fileName);
    res.download(filePath, fileName);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateContent = async (req, res) => {
  const { id } = req.params;
  try {
    // Extract file buffers from the request
    const referenceLetter = req.files["referenceLetter"][0].path;
    const resume = req.files["resume"][0].path;
    const statement = req.files["statement"][0].path;

    // Update content with file data
    const updatedContent = await Content.update(
      {
        ...req.body,
        referenceLetter: referenceLetter,
        resume: resume,
        statement: statement,
      },
      {
        where: { id: id },
        returning: true, // Return the updated content
        plain: true,
      }
    );

    console.log("updatedContent:", updatedContent);
    console.log("updatedContent[1]:", updatedContent[1]);

    res.status(200).json(updatedContent[1]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteContent = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete content based on the specified id
    const deletedContent = await Content.destroy({
      where: { id: id },
    });

    res.status(204).send({ message: "successfully deleted" }); // Send a success response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createContent,
  getContents,
  getContentById,
  downloadFile,
  updateContent,
  deleteContent,
};
