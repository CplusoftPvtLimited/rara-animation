const Profile = require("../models/Profile");

const createProfile = async (req, res) => {
  // console.log("req.file file: ", req.files);
  if (!req.files) {
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
    facebookUrl,
    twitterUrl,
    ritsumeiUrl,
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
    // "heading",
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
    // Get the image path
    const baseUrl = "https://backend.pecunia.institute/";
    const thumbnailPath = req.files.thumbnailPath[0].path;
    const imagePath = req.files.imagePath[0].path;
    const animatedImage = req.files.animatedImage[0].path;
    const featuredImagePath = req.files.featuredImage[0].path;
    const clothAnimatedImage = req.files.clothAnimatedImage[0].path;
    const firstGraphicImage = req.files.firstGraphicImage[0].path;
    const secondGraphicImage = req.files.secondGraphicImage[0].path;
    const graphic1 = req.files.graphic1[0].path;
    const graphic2 = req.files.graphic2[0].path;
    const graphic3 = req.files.graphic3[0].path;

    let pictureSliderPaths = [];

    if (req.files.pictureSlider && req.files.pictureSlider.length > 0) {
      pictureSliderPaths = req.files.pictureSlider.map(
        (file) => baseUrl + file.path
      );
    }

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
      thumbnailPath: baseUrl + thumbnailPath,
      imagePath: baseUrl + imagePath,
      animatedImage: baseUrl + animatedImage,
      featuredImage: baseUrl + featuredImagePath,
      clothAnimatedImage: baseUrl + clothAnimatedImage,
      firstGraphicImage: baseUrl + firstGraphicImage,
      secondGraphicImage: baseUrl + secondGraphicImage,
      graphic1: baseUrl + graphic1,
      graphic2: baseUrl + graphic2,
      graphic3: baseUrl + graphic3,
      pictureSlider:
        pictureSliderPaths.length > 0
          ? JSON.stringify(pictureSliderPaths)
          : null,
      facebookUrl,
      twitterUrl,
      ritsumeiUrl,
    });

    return res
      .status(200)
      .json({ message: "Profile created successfully", Profile: newProfile });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error creating profile: ", error: err.message });
  }
};

const getAllProfiles = async (req, res) => {
  const profiles = await Profile.findAll({ order: [["createdAt", "DESC"]] });
  console.log("profiles: ", profiles);
  try {
    const profiles = await Profile.findAll({ order: [["createdAt", "DESC"]] });
    if (!profiles.length) {
      return res.status(404).json({ message: "No Profiles found" });
    }
    res.status(200).send({ profiles });
  } catch (err) {
    res.status(400).json(err.message);
  }
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
  try {
    let id = req.params.id;
    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(400).json({ error: "Profile not found" });
    }

    // const baseUrl = "https://backend.pecunia.institute/";
    const baseUrl = "http://localhost:4500/";
    const thumbnailPath =
      req.files?.thumbnailPath && typeof req.files?.thumbnailPath == "object"
        ? baseUrl + req.files?.thumbnailPath[0].path
        : profile.thumbnailPath;
    const imagePath =
      req.files?.imagePath && typeof req.files?.imagePath == "object"
        ? baseUrl + req.files?.imagePath[0].path
        : profile.imagePath;
    const animatedImage =
      req.files?.animatedImage && typeof req.files?.animatedImage == "object"
        ? baseUrl + req.files?.animatedImage[0].path
        : profile.imagePath;
    const featuredImagePath =
      req.files?.featuredImage && typeof req.files?.featuredImage == "object"
        ? baseUrl + req.files?.featuredImage[0].path
        : profile.featuredImage;

    const clothAnimatedImage =
      req.files?.clothAnimatedImage &&
      typeof req.files?.clothAnimatedImage == "object"
        ? baseUrl + req.files?.clothAnimatedImage[0].path
        : profile.clothAnimatedImage;

    const firstGraphicImage =
      req.files?.firstGraphicImage &&
      typeof req.files?.firstGraphicImage == "object"
        ? baseUrl + req.files?.firstGraphicImage[0].path
        : profile.firstGraphicImage;

    const secondGraphicImage =
      req.files?.secondGraphicImage &&
      typeof req.files?.secondGraphicImage == "object"
        ? baseUrl + req.files?.secondGraphicImage[0].path
        : profile.secondGraphicImage;

    const graphic1 =
      req.files?.graphic1 && typeof req.files?.graphic1 == "object"
        ? baseUrl + req.files?.graphic1[0].path
        : profile.graphic1;
    const graphic2 =
      req.files?.graphic2 && typeof req.files?.graphic2 == "object"
        ? baseUrl + req.files?.graphic2[0].path
        : profile.graphic2;
    const graphic3 =
      req.files?.graphic3 && typeof req.files?.graphic3 == "object"
        ? baseUrl + req.files?.graphic3[0].path
        : profile.graphic3;
    const pictureSliderPaths = req.files?.pictureSlider
      ? req.files?.pictureSlider.map((file) => `${baseUrl}${file.path}`)
      : profile.pictureSlider;
    let pictureSliderJSON;
    if (req.files?.pictureSlider) {
      pictureSliderJSON = JSON.stringify(pictureSliderPaths);
    }

    const updateObj = {
      name: req.body.name || profile.name,
      nameEnglish: req.body.nameEnglish || profile.nameEnglish,
      tagLine: req.body.tagLine || profile.tagLine,
      jobPost: req.body.jobPost || profile.jobPost,
      profileDesc: req.body.profileDesc || profile.profileDesc,
      websiteUrl: req.body.websiteUrl || profile.websiteUrl,
      heading: req.body.heading || profile.heading,
      paragraph: req.body.paragraph || profile.paragraph,
      thumbnailPath: thumbnailPath,
      imagePath: imagePath,
      animatedImage: animatedImage,
      clothAnimatedImage,
      firstGraphicImage,
      secondGraphicImage,
      featuredImage: featuredImagePath,
      pictureSlider: pictureSliderJSON,
      graphic1: graphic1,
      graphic2: graphic2,
      graphic3: graphic3,
    };

    await Profile.update(updateObj, {
      where: { id },
    });
    const updatedProfile = await Profile.findByPk(id);
    return res.status(200).json({
      message: "Profile updated successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    return res.status(500).json(error.message);
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