const Home = require("../models/homePage");

const addHome = async (req, res) => {
  if (!req.files) {
    return res.status(400).json({ error: "No image provided" });
  }
  const {
    mainHeading,
    mainSubHeading,
    mainAbout,
    mainEstablish,
    mainDescription,
    mainAim,
    mainResearchTitle,
    mainResearchDescription,
    card1Heading,
    card1Title,
    card1Description,
    card2Heading,
    card2Title,
    card2Description,
    card3Heading,
    card3Title,
    card3Description,
    card4Heading,
    card4Title,
    card4Description,
    cardGuidelineDescription,
    fellows,
    blogs,
    contactHeading,
    contactEmail,
    contactMailchimpKey,
  } = req.body;

  const requiredFields = [
    "mainHeading",
    "mainSubHeading",
    "mainAbout",
    "mainEstablish",
    "mainDescription",
    "mainAim",
    "mainResearchTitle",
    "mainResearchDescription",
    "card1Heading",
    "card1Title",
    "card1Description",
    "card2Heading",
    "card2Title",
    "card2Description",
    "card3Heading",
    "card3Title",
    "card3Description",
    "card4Heading",
    "card4Title",
    "card4Description",
    "cardGuidelineDescription",
    "fellows",
    "blogs",
    "contactHeading",
    "contactEmail",
    "contactMailchimpKey",
  ];

  for (key of requiredFields) {
    if (!req.body[key]) {
      return res.status(400).json({ error: `${key} is required` });
    }
  }

  try {
    const baseUrl = "https://backend.pecunia.institute/";
    let mainResearchImage = baseUrl + req.files.mainResearchImage[0].path;
    let card1Image = baseUrl + req.files.card1Image[0].path;
    let card2Image = baseUrl + req.files.card2Image[0].path;
    let card3Image = baseUrl + req.files.card3Image[0].path;
    let card4Image = baseUrl + req.files.card4Image[0].path;
    let card1InsideImage = baseUrl + req.files.card1InsideImage[0].path;
    let card2InsideImage = baseUrl + req.files.card2InsideImage[0].path;
    let card3InsideImage = baseUrl + req.files.card3InsideImage[0].path;
    let card4InsideImage = baseUrl + req.files.card4InsideImage[0].path;

    const newHome = await Home.create({
      mainHeading,
      mainSubHeading,
      mainAbout,
      mainEstablish,
      mainDescription,
      mainAim,
      mainResearchImage,
      mainResearchTitle,
      mainResearchDescription,
      card1Heading,
      card1Image,
      card1Title,
      card1Description,
      card1InsideImage,
      card2Heading,
      card2Image,
      card2Title,
      card2Description,
      card2InsideImage,
      card3Heading,
      card3Image,
      card3Title,
      card3Description,
      card3InsideImage,
      card4Heading,
      card4Image,
      card4Title,
      card4Description,
      card4InsideImage,
      cardGuidelineDescription,
      fellows,
      blogs,
      contactHeading,
      contactEmail,
      contactMailchimpKey,
    });

    return res
      .status(200)
      .send({ message: "Home Page Info added successfully", newHome });
  } catch (err) {
    res.status(403).json(err.message);
  }
};

// Get Home Page Content

const getHome = async (req, res) => {
  try {
    const home = await Home.findAll();
    if (!home.length) {
      return res.status(404).json({ message: "No Home page content found" });
    }

    res.status(200).send({ home });
  } catch (err) {
    console.log("err: ", err);
    res.status(403).json({ err });
  }
};

// Update Home Page Content
const updateHome = async (req, res) => {
  const homeId = req.params.id;
  console.log("*****Req.Body: ", req.body);
  try {
    const home = await Home.findByPk(homeId);
    if (!home) {
      return res.status(404).json({ error: "No Info Found" });
    }

    const baseUrl = "https://backend.pecunia.institute/";
    // const baseUrl = "http://localhost:4500/";
    const mainResearchImage =
      req.files?.mainResearchImage &&
      typeof req.files?.mainResearchImage == "object"
        ? baseUrl + req.files?.mainResearchImage[0].path
        : home.mainResearchImage;

    const card1Image =
      req.files?.card1Image && typeof req.files?.card1Image == "object"
        ? baseUrl + req.files?.card1Image[0].path
        : home.card1Image;

    const card2Image =
      req.files?.card2Image && typeof req.files?.card2Image == "object"
        ? baseUrl + req.files?.card2Image[0].path
        : home.card2Image;

    const card3Image =
      req.files?.card3Image && typeof req.files?.card3Image == "object"
        ? baseUrl + req.files?.card3Image[0].path
        : home.card3Image;

    const card4Image =
      req.files?.card4Image && typeof req.files?.card4Image == "object"
        ? baseUrl + req.files?.card4Image[0].path
        : home.card4Image;

    const card1InsideImage =
      req.files?.card1InsideImage &&
      typeof req.files?.card1InsideImage == "object"
        ? baseUrl + req.files?.card1InsideImage[0].path
        : home.card1InsideImage;

    const card2InsideImage =
      req.files?.card2InsideImage &&
      typeof req.files?.card2InsideImage == "object"
        ? baseUrl + req.files?.card2InsideImage[0].path
        : home.card2InsideImage;

    const card3InsideImage =
      req.files?.card3InsideImage &&
      typeof req.files?.card3InsideImage == "object"
        ? baseUrl + req.files?.card3InsideImage[0].path
        : home.card3InsideImage;

    const card4InsideImage =
      req.files?.card4InsideImage &&
      typeof req.files?.card4InsideImage == "object"
        ? baseUrl + req.files?.card4InsideImage[0].path
        : home.card4InsideImage;

    // Assign new values to updatedFields
    const updatedFields = {
      mainHeading: req.body.mainHeading || home.mainHeading,
      mainSubHeading: req.body.mainSubHeading || home.mainSubHeading,
      mainAbout: req.body.mainAbout || home.mainAbout,
      mainEstablish: req.body.mainEstablish || home.mainEstablish,
      mainDescription: req.body.mainDescription || home.mainDescription,
      mainAim: req.body.mainAim || home.mainAim,
      mainResearchTitle: req.body.mainResearchTitle || home.mainResearchTitle,
      mainResearchImage: mainResearchImage || home.mainResearchImage,
      mainResearchDescription:
        req.body.mainResearchDescription || home.mainResearchDescription,
      card1Heading: req.body.card1Heading || home.card1Heading,
      card1Title: req.body.card1Title || home.card1Title,
      card1Image: card1Image || home.card1Image,
      card2Image: card2Image || home.card2Image,
      card3Image: card3Image || home.card3Image,
      card4Image: card4Image || home.card4Image,
      card1InsideImage: card1InsideImage || home.card1InsideImage,
      card2InsideImage: card2InsideImage || home.card2InsideImage,
      card3InsideImage: card3InsideImage || home.card3InsideImage,
      card4InsideImage: card4InsideImage || home.card4InsideImage,
      card1Description: req.body.card1Description || home.card1Description,
      card2Heading: req.body.card2Heading || home.card2Heading,
      card2Title: req.body.card2Title || home.card2Title,
      card2Description: req.body.card2Description || home.card2Description,
      card3Heading: req.body.card3Heading || home.card3Heading,
      card3Title: req.body.card3Title || home.card3Title,
      card3Description: req.body.card3Description || home.card3Description,
      card4Heading: req.body.card4Heading || home.card4Heading,
      card4Title: req.body.card4Title || home.card4Title,
      card4Description: req.body.card4Description || home.card4Description,
      cardGuidelineDescription:
        req.body.cardGuidelineDescription || home.cardGuidelineDescription,
      fellows: req.body.fellows || home.fellows,
      blogs: req.body.blogs || home.blogs,
      contactHeading: req.body.contactHeading || home.contactHeading,
      contactEmail: req.body.contactEmail || home.contactEmail,
      contactMailchimpKey:
        req.body.contactMailchimpKey || home.contactMailchimpKey,
    };

    await home.update(updatedFields);

    const updatedHome = await Home.findByPk(homeId);
    res.status(200).json(updatedHome);
  } catch (err) {
    res.status(403).json(err.message);
  }
};

module.exports = {
  addHome,
  getHome,
  updateHome,
};
