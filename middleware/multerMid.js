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

const upload = multer({
  storage: multerMid,
  fileFilter: (req, file, cb) => {
    // Allowed file types (JPEG, PNG, GIF)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'));
    }
  },
});

module.exports = upload;
