const express = require ('express')
const router = express.Router();
const upload = require('../middleware/multerMid');

const { createProfile, getAllProfiles, getProfileById, updateProfile, deleteProfile } = require('../controllers/profileController');

// Create New Fellow Profile
router.post('/createProfile', upload.fields([{ name: 'imagePath', maxCount: 1 }, { name: 'featuredImage', maxCount: 1 }, { name: 'pictureSlider', maxCount: 10 } ]), createProfile);

// Route for fetching all Profiles
router.get ('/getAllProfiles', getAllProfiles)

// Route for fetching a Profile by ID
router.get ('/geProfileById', getProfileById)

// Route for updating a Profile by ID
router.put('/updateProfile/:id', updateProfile )

// Route for deleting a Profile by ID
router.delete('/:id', deleteProfile);



module.exports = router;