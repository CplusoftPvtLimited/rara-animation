const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerMid");
const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileController");

// Create New Fellow Profile
router.post(
  "/createProfile",
  upload.fields([
    { name: "imagePath", maxCount: 1 },
    { name: "animatedImage", maxCount: 1 },
    { name: "graphic1", maxCount: 1 },
    { name: "graphic2", maxCount: 1 },
    { name: "graphic3", maxCount: 1 },
    { name: "thumbnailPath", maxCount: 1 },
    { name: "featuredImage", maxCount: 1 },
    { name: "pictureSlider", maxCount: 10 },
  ]),
  createProfile
);

// Route for fetching all Profiles
router.get("/getAllProfiles", getAllProfiles);

// Route for fetching a Profile by ID
router.get("/:id", getProfileById);

// Route for updating a Profile by ID
router.patch(
  "/updateProfile/:id",
  upload.fields([
    { name: "imagePath", maxCount: 1 },
    { name: "animatedImage", maxCount: 1 },
    { name: "graphic1", maxCount: 1 },
    { name: "graphic2", maxCount: 1 },
    { name: "graphic3", maxCount: 1 },
    { name: "thumbnailPath", maxCount: 1 },
    { name: "featuredImage", maxCount: 1 },
    { name: "pictureSlider", maxCount: 10 },
  ]),
  updateProfile
);

// Route for deleting a Profile by ID
router.delete("/deleteProfile/:id", deleteProfile);

module.exports = router;
