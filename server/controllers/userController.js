const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./factoryHandler");

module.exports.getAllUsers = factory.getAllDocs(User);

module.exports.getUser = factory.getDoc(User);

module.exports.createUser = factory.createDoc(User);

module.exports.updateUser = factory.updateDoc(User);

module.exports.deleteUser = factory.deleteDoc(User);

module.exports.setMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

module.exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { isActive: false },
    { runValidators: true, new: true }
  );

  if (!user) {
    return next(new AppError("User does not exists", 404));
  }

  res.status(204).json({ status: "success" });
});

module.exports.checkBody = (req, res, next) => {
  if (req.body.password) {
    return next(
      new AppError("Passwords could not be changed through this route", 400)
    );
  }

  next();
};
