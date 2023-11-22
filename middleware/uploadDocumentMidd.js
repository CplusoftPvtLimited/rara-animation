const multer = require("multer");

const multerMid = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./documents");
  },
  filename: (req, file, cb) => {
    console.log("multer");
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const documentFileFilter = (req, file, cb) => {
  try {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only PDF, Word, and PowerPoint files are allowed."
        )
      );
    }
  } catch (err) {
    cb(err);
  }
};

const upload = multer({
  storage: multerMid,
  documentFileFilter: documentFileFilter,
});

module.exports = upload;
