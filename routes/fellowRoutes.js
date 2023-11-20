const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerMid");

const {
  createFellow,
  getFellows,
  getFellowById,
  updateFellow,
  deleteFellow,
} = require("../controllers/fellowController");

router.post("/createFellow", upload.single("imagePath"), createFellow);
router.get("/getFellows", getFellows);
router.get("/:id", getFellowById);
router.put("/:id", upload.single("imagePath"), updateFellow);
router.delete("/:id", deleteFellow);

module.exports = router;
