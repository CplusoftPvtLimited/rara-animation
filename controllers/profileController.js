const Profile = require('../models/Profile');

const createProfile = async (req, res) => {
  // Get other fields from the request body
  let {
    name,
    nameEnglish,
    tagLine,
    jobPost,
    profileDesc,
    websiteUrl,
    heading,
    paragraph,
  } = req.body;

  // Check for required fields
  const requiredFields = [
    'name',
    'nameEnglish',
    'tagLine',
    'jobPost',
    'profileDesc',
    'websiteUrl',
    'heading',
    'paragraph',
  ];

  for (let field of requiredFields) {
    if (!req.body[field] || req.body[field] === '' || req.body[field] === undefined || req.body[field] === null) {
      return res.status(400).json({ error: `${field} is required` });
    }
  }

  // Check if at least one image is provided for the imagePath field
  if (!req.file) {
    return res.status(400).json({ error: 'Image required' });
  }

  try {
    // Get the image path for the imagePath field
    const imagePath = req.file.path;

    // Get the array of image paths for the pictureSlider field
    let pictureSlider = [];
    if (req.files && req.files.pictureSlider) {
      pictureSlider = req.files.pictureSlider.map((file) => file.path);
    }

    // Create the new Profile entry in the database
    const newProfile = await Profile.create({
      name,
      nameEnglish,
      tagLine,
      jobPost,
      profileDesc,
      websiteUrl,
      heading,
      paragraph,
      imagePath,
      pictureSlider: JSON.stringify(pictureSlider), 
    });

    return res
      .status(200)
      .json({ message: 'Data added successfully', Profile: newProfile });
  } catch (err) {
    res.status(500).json({ error: 'Error uploading profile: ', err });
  }
};

const getAllProfiles = async(req, res) => {
    try{
        const profiles = await Profile.findAll()
        if (!profiles.length) {
            return res.status(404).json({ message: 'No Profiles found' });
        }
        res.status(200).send({profiles})
    } catch (err) {
        res.status(400).json({error : 'Error fetching Profiles'})
    }
}

const getProfileById = async(req, res) => {
    try{
        let profileId = req.body;
        const profile = await Profile.findByPk(profileId)
        if (!profile) {
            return res.status(404).json({ message: 'No Profile found' });
        }
        res.status(200).send({profile})
    } catch (err) {
        res.status(400).json({error : 'Error fetching Profile'})
    }
}

const updateProfile = async (req, res) => {
    try{
        let id = req.params.id;
        const profile = await Profile.findByPk(id);
        if(!profile) {
            return res.status(400).json({error : 'Profile not found'})
        }
        const updateObj = [];
        const allowedKeys = [
            "name",
            "nameEnglish",
            "tagLine",
            "jobPost",
            "profileDesc",
            "websiteUrl",
            "heading",
            "paragraph",
            "imagePath",
          ];
        allowedKeys.forEach(key => {
            if(req.body[key]) {
                updateObj[key] = req.body[key]
            }
        });
        
        await Profile.update(updateObj, {
            where: { id }, 
          });
          const updatedProfile = await Profile.findByPk(id);
          return res.status(200).json({ message: 'Profile updated successfully', profile: updatedProfile });
     } catch (error) { 
        return res.status(500).json({ error: 'Error updating profile', error })
    };
        
}

module.exports = {
    createProfile,
    getAllProfiles,
    getProfileById,
    updateProfile
}