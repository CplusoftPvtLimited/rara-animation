const multer = require('multer');

const multerMid = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('multer');
    return cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    console.log('multer');
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: multerMid });
module.exports = upload;
