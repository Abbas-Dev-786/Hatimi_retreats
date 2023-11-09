const multer = require("multer");
const AppError = require("./AppError");
const { storage } = require("./cloudinary");

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage,
  fileFilter: multerFilter,
});

module.exports = upload;
