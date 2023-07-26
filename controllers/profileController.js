const Profile = require('../models/Profile');

const createProfile = async (req, res) => {

  if (!req.files) {
    return res.status(400).json({ error: 'No image provided' });
  }

  
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


  try {
    // Get the image path 

    const imagePath = req.files.imagePath[0].path;
    const featuredImagePath = req.files.featuredImage[0].path;
    const pictureSliderPaths = req.files.pictureSlider.map((file) => file.path);

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
      featuredImage : featuredImagePath,
      pictureSlider: JSON.stringify(pictureSliderPaths), 
    });

    return res
      .status(200)
      .json({ message: 'Profile created successfully', Profile: newProfile });
  } catch (err) {
    res.status(500).json({ error: 'Error creating profile: ', err });
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
        const profile = await Profile.findByPk(req.params.id)
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

const deleteProfile = async (req, res) => {
  try {
    let id = req.params.id;
    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    await profile.destroy();
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Profile Not Deleted' });
  }
};

module.exports = {
    createProfile,
    getAllProfiles,
    getProfileById,
    updateProfile,
    deleteProfile,
}