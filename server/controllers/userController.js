const Booking = require("../models/bookingModel");
const Court = require("../models/courtModel");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./factoryHandler");

// get all users => Admin
module.exports.getAllUsers = factory.getAllDocs(User);

// get a user => Admin
module.exports.getUser = factory.getDoc(User);

// create a user => All
module.exports.createUser = factory.createDoc(User);

//update user => All
module.exports.updateUser = factory.updateDoc(User);

//delete user permanently => Admin
module.exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new AppError("user does not exists", 404));
  }

  user.deleteAllUserRelations(req.params.id);

  res.status(204).json({ status: "success" });
});

// delete user profile => user
module.exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { isActive: false },
    { runValidators: true, new: true }
  );

  if (!user) {
    return next(new AppError("User does not exists", 404));
  }

  user.deleteAllUserRelations(req.params.id);

  res.status(204).json({ status: "success" });
});

// admin dashboard stats => admin
module.exports.getAdminStats = catchAsync(async (req, res, next) => {
  const totalCourts = await Court.countDocuments();

  const upcomingBookings = await Booking.countDocuments({
    $and: [{ status: "confirmed" }, { startTime: { $gte: new Date() } }],
  });

  res
    .status(200)
    .json({ status: "success", data: { totalCourts, upcomingBookings } });
});

// set userid middleware
module.exports.setMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

// check body middlware
module.exports.checkBody = (req, res, next) => {
  if (req.body.password) {
    return next(
      new AppError("Passwords could not be changed through this route", 400)
    );
  }

  next();
};
