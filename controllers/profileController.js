const Profile = require("../models/Profile");

const createProfile = async (req, res) => {
  // console.log('req.file file: ', req.file);
  if (!req.file) {
    return res.status(400).json({ error: "No image provided" });
  }

  // Get other fields from the request body
  let {
    name,
    nameEnglish,
    tagLine,
    jobPost,
    profileDesc,
    // websiteUrl,
    heading,
    paragraph,
  } = req.body;

  // Check for required fields
  const requiredFields = [
    "name",
    "nameEnglish",
    "tagLine",
    "jobPost",
    "profileDesc",
    "heading",
    "paragraph",
  ];

  for (let field of requiredFields) {
    if (
      !req.body[field] ||
      req.body[field] === "" ||
      req.body[field] === undefined ||
      req.body[field] === null
    ) {
      return res.status(400).json({ error: `${field} is required` });
    }
  }
  try {
    const baseUrl = "http://localhost:4500/";

    // Get the image path
    const path = req.file.path;
    console.log("path: " + path);
    // const featuredImagePath = req.files.featuredImage[0].path;
    // const pictureSliderPaths = req.files.pictureSlider.map((file) => file.path);

    // Create the new Profile entry in the database
    const newProfile = await Profile.create({
      name,
      nameEnglish,
      tagLine,
      jobPost,
      profileDesc,
      // websiteUrl,
      heading,
      paragraph,
      imagePath: baseUrl + path,
      // featuredImage: featuredImagePath,
      // pictureSlider: JSON.stringify(pictureSliderPaths),
    });

    console.log("new profile: ", newProfile);

    return res
      .status(200)
      .json({ message: "Profile created successfully", Profile: newProfile });
  } catch (err) {
    res.status(500).json({ error: "Error creating profile: ", err });
  }
};

const getAllProfiles = async (req, res) => {
  // try {
  const profiles = await Profile.findAll({ order: [["createdAt", "DESC"]] });
  console.log("************Profile", profiles);
  if (!profiles.length) {
    return res.status(404).json({ message: "No Profiles found" });
  }
  res.status(200).send({ profiles });
  // } catch (err) {
  //   res.status(400).json({ error: 'Error fetching Profiles' });
  // }
};

const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "No Profile found" });
    }
    res.status(200).send({ profile });
  } catch (err) {
    res.status(400).json({ error: "Error fetching Profile" });
  }
};

// const updateProfile = async (req, res) => {
//   try {
//     let id = req.params.id;
//     const profile = await Profile.findByPk(id);
//     if (!profile) {
//       return res.status(400).json({ error: 'Profile not found' });
//     }
//     const updateObj = {};
//     const allowedKeys = [
//       'name',
//       'nameEnglish',
//       'tagLine',
//       'jobPost',
//       'profileDesc',
//       'websiteUrl',
//       'heading',
//       'paragraph',
//       'imagePath',
//     ];
//     allowedKeys.forEach((key) => {
//       if (req.body[key]) {
//         updateObj[key] = req.body[key];
//       }
//     });

//     console.log('updateObj: ', updateObj);

//     await Profile.update(updateObj, {
//       where: { id },
//     });
//     const updatedProfile = await Profile.findByPk(id);
//     return res.status(200).json({
//       message: 'Profile updated successfully',
//       profile: updatedProfile,
//     });
//   } catch (error) {
//     return res.status(500).json({ error: 'Error updating profile', error });
//   }
// };

const updateProfile = async (req, res) => {
  const {
    name,
    nameEnglish,
    tagLine,
    jobPost,
    profileDesc,
    heading,
    paragraph,
  } = req.body;
  console.log("file file: ", req.file);

  const profilePost = await Profile.findByPk(req.params.id);
  if (!profilePost) {
    return res.status(404).json({ error: "Profile post not found" });
  }
  profilePost.name = name;
  profilePost.nameEnglish = nameEnglish;
  profilePost.tagLine = tagLine;
  profilePost.jobPost = jobPost;
  profilePost.profileDesc = profileDesc;
  profilePost.heading = heading;
  profilePost.paragraph = paragraph;

  const baseUrl = "http://localhost:4500/";
  if (req.file) {
    const imagePath = req.file.path;
    profilePost.dataValues.imagePath = baseUrl + imagePath;
  }
  console.log("profilePost: ", profilePost);
  try {
    await Profile.update(profilePost.dataValues, {
      where: { id: req.params.id },
    });
    const updateProfilePost = await Profile.findByPk(req.params.id);
    res.status(200).json(updateProfilePost);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const deleteProfile = async (req, res) => {
  try {
    let id = req.params.id;
    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    await profile.destroy();
    res.json({ message: "Profile deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Profile Not Deleted" });
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
};
