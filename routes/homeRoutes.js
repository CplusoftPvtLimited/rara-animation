const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerMid");
const { 
  addHome,
  getHome,
  updateHome,
} = require("../controllers/homePageController");


// Add Home Page Content
router.post(
  "/addHome",
  upload.fields([
    { name: "mainResearchImage", maxCount: 1 },
    { name: "card1Image", maxCount: 1 },
    { name: "card2Image", maxCount: 1 },
    { name: "card3Image", maxCount: 1 },
    { name: "card4Image", maxCount: 1 },
    { name: "card1InsideImage", maxCount: 1 },
    { name: "card2InsideImage", maxCount: 1 },
    { name: "card3InsideImage", maxCount: 1 },
    { name: "card4InsideImage", maxCount: 1 },
  ]),
  addHome
);

// Get Home Page Content
router.get("/getHome", getHome);

// Update Home Page Content
router.put("/updateHome/:id", updateHome);



module.exports = router;
