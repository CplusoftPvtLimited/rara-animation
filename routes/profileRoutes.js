const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerMid');
const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} = require('../controllers/profileController');

// Create New Fellow Profile
router.post('/createProfile', upload.single('imagePath'), createProfile);

// Route for fetching all Profiles
router.get('/getAllProfiles', getAllProfiles);

// Route for fetching a Profile by ID
router.get('/:id', getProfileById);

// Route for updating a Profile by ID
router.put('/updateProfile/:id', upload.single('imagePath'), updateProfile);

// Route for deleting a Profile by ID
router.delete('/deleteProfile/:id', deleteProfile);

module.exports = router;
