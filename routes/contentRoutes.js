const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadDocumentMidd");

const {
  createContent,
  getContents,
  getContentById,
  downloadFile,
  updateContent,
  deleteContent,
} = require("../controllers/contentController");
// Middleware for file uploads
const handleFileUploads = upload.fields([
  { name: "referenceLetter", maxCount: 1 },
  { name: "resume", maxCount: 1 },
  { name: "statement", maxCount: 1 },
]);

router.post("/createContact", handleFileUploads, createContent);
router.get("/getContacts", getContents);
router.get("/:id", getContentById);
router.get("/download/:fileType/:id", downloadFile);
router.put("/:id", handleFileUploads, updateContent);
router.delete("/:id", deleteContent);

module.exports = router;
