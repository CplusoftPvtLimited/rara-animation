const express = require ('express')
const router = express.Router();
const upload = require('../middleware/multerMid');
const { createProfile, getAllProfiles, getProfileById, updateProfile } = require('../controllers/profileController');

// Create New Fellow Proifle
router.post ('/createProfile',  upload.fields([ { name: 'imagePath', maxCount: 1 }, { name: 'pictureSlider', maxCount: 7 }, ]), createProfile)
router.get ('/getAllProfiles', getAllProfiles)
router.get ('/geProfileById', getProfileById)
router.put('/updateProfile/:id', updateProfile )



module.exports = router;