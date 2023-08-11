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
    const baseUrl = "http://localhost:4500/";
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
      contactHeading,
      contactEmail,
      contactMailchimpKey,
    });

    return res
      .status(200)
      .send({ message: "Home Page Info added successfully", newHome });
  } catch (err) {
    res.status(403).json( err.message );
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

  try {
    const home = await Home.findByPk(homeId);
    if (!home) {
      return res.status(404).json({ error: "No Info Found" });
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
      contactHeading,
      contactEmail,
      contactMailchimpKey,
    } = req.body;

    // Assign new values to updatedFields
    const updatedFields = {
      mainHeading: mainHeading || home.mainHeading,
      mainSubHeading: mainSubHeading || home.mainSubHeading,
      mainAbout: mainAbout || home.mainAbout,
      mainEstablish: mainEstablish || home.mainEstablish,
      mainDescription: mainDescription || home.mainDescription,
      mainAim: mainAim || home.mainAim,
      mainResearchTitle: mainResearchTitle || home.mainResearchTitle,
      mainResearchDescription: mainResearchDescription || home.mainResearchDescription,
      card1Heading: card1Heading || home.card1Heading,
      card1Title: card1Title || home.card1Title,
      card1Description: card1Description || home.card1Description,
      card2Heading: card2Heading || home.card2Heading,
      card2Title: card2Title || home.card2Title,
      card2Description: card2Description || home.card2Description,
      card3Heading: card3Heading || home.card3Heading,
      card3Title: card3Title || home.card3Title,
      card3Description: card3Description || home.card3Description,
      card4Heading: card4Heading || home.card4Heading,
      card4Title: card4Title || home.card4Title,
      card4Description: card4Description || home.card4Description,
      cardGuidelineDescription: cardGuidelineDescription || home.cardGuidelineDescription,
      contactHeading: contactHeading || home.contactHeading,
      contactEmail: contactEmail || home.contactEmail,
      contactMailchimpKey: contactMailchimpKey || home.contactMailchimpKey,
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
}
