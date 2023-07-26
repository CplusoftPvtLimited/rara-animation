const multer = require('multer');

const multerMid = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('multer');
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    console.log('multer');
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {

  try{ 
  // Allowed file types (JPEG, PNG, GIF)
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'));
  }} catch (err) {
    res.status(400).json({error : 'Multer Failed', err})
  }
};

const upload = multer({
  storage: multerMid,
  fileFilter: fileFilter,
});

module.exports = upload;
