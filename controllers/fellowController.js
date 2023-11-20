const Fellow = require("../models/Fellow");

const createFellow = async (req, res) => {
  const { paragraph1, paragraph2, link } = req.body;
  console.log("body: ", req.body);

  // console.log("req.path: ", req.file);

  // if (!req.file) {
  //   return res.status(400).json({ error: "No image provided" });
  // }

  if (!paragraph1 || !paragraph2 || !link) {
    return res.status(400).json({ error: "Please enter details" });
  }

  try {
    const { originalname, path } = req.file;
    let imagePath = null;
    if (req?.file) {
      imagePath = req.file.path;
    }

    const baseUrl = "https://backend.pecunia.institute/";
    // const baseUrl = "http://localhost:4500/";

    let fellow;
    if (req?.file) {
      fellow = await Fellow.create({
        imagePath: baseUrl + path,
        paragraph1: paragraph1,
        paragraph2: paragraph2,
        link: link,
      });
    } else {
      fellow = await Fellow.create({
        paragraph1: paragraph1,
        paragraph2: paragraph2,
        link: link,
        imagePath: NULL,
      });
    }

    return res
      .status(200)
      .send({ message: "Fellow added successfully", Fellow: fellow });
  } catch (err) {
    console.log("err: ", err);
    res.status(403).json({ err });
  }
};

const getFellows = async (req, res) => {
  try {
    const fellows = await Fellow.findAll({});
    res.json(fellows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFellowById = async (req, res) => {
  const fellowId = req.params.id;
  try {
    const fellow = await Fellow.findByPk(fellowId);

    if (!fellow) {
      return res.status(404).json({ error: "Fellow not found" });
    }
    res.json(fellow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFellow = async (req, res) => {
  const { paragraph1, paragraph2, link } = req.body;
  console.log("req updated body", req.body);
  const fellow = await Fellow.findByPk(req.params.id);
  if (!fellow) {
    return res.status(404).json({ error: "fellow not found" });
  }

  fellow.paragraph1 = paragraph1;
  fellow.paragraph2 = paragraph2;
  fellow.link = link;

  // const baseUrl = "https://backend.pecunia.institute/";
  const baseUrl = "http://localhost:4500/";

  if (req.file) {
    const imagePath = req.file.path;
    // blogPost.dataValues.imagePath = baseUrl + imagePath;
    fellow.imagePath = baseUrl + imagePath;
  }

  try {
    console.log("update fellow", fellow);
    await fellow.save();

    res.status(200).json(fellow);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const deleteFellow = async (req, res) => {
  const fellowId = req.params.id;

  try {
    const fellow = await Fellow.findByPk(fellowId);

    if (!fellow) {
      res.status(404).json({ error: "fellow not found" });
      return;
    }

    await fellow.destroy();
    res.json({ message: "fellow deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createFellow,
  getFellows,
  getFellowById,
  updateFellow,
  deleteFellow,
};
