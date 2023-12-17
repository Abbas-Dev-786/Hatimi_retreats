const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const signToken = (id) =>
  // returns a signed jwt
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createAndSendToken = (res, user) => {
  // creates token and send response to user
  const token = signToken(user._id);

  user.password = undefined;
  user.isActive = undefined;
  user.updatedAt = undefined;

  res.status(200).json({ status: "success", data: { user, token } });
};

//==================== REGISTER handler ===============
module.exports.register = catchAsync(async (req, res, next) => {
  const { password, confirmPassword } = req?.body;

  if (!password || !confirmPassword) {
    return next(
      new AppError("Please Enter password and confirm your password", 400)
    );
  }

  if (password.length < 8) {
    return next(
      new AppError("Password length should be more than 8 characters", 400)
    );
  }

  if (password !== confirmPassword) {
    return next(new AppError("Password not matching", 400));
  }

  const user = await User.create(req.body);

  user.password = undefined;
  user.isActive = undefined;
  user.updatedAt = undefined;

  res.status(201).json({ status: "success", data: user });
});

//==================== LOGIN ===============
module.exports.adminLogin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // validation checks
  if (!email || !password) {
    return next(new AppError("Email and password are required", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  // check password
  if (!user || !(await user.comparePasswords(password, user.password))) {
    return next(
      new AppError("Invalid credentials. Please check email or password", 400)
    );
  }

  // check user is deleted
  if (!user.isActive) {
    return next(new AppError("user does not exists", 404));
  }

  // check user role
  if (user.role === "user") {
    return next(new AppError("You are not allowed", 403));
  }

  // if each checks are passed then create and send token to user
  createAndSendToken(res, user);
});

//===============UPDATE_PASSWORD===============
exports.updatePassword = catchAsync(async (req, res, next) => {
  // find user
  const user = await User.findById(req.user.id).select("+password");

  // checks;
  if (!req.body.currentPassword) {
    return next(new AppError("Enter currentPassword", 400));
  }

  // check previous password
  if (!(await user.comparePasswords(req.body.currentPassword, user.password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }

  // checks
  if (!req.body.confirmPassword || !req.body.password) {
    return next(new AppError("please enter password and confirmPassword", 400));
  }

  if (req.body.confirmPassword !== req.body.password) {
    return next(new AppError("Confirmpassword and password not matching", 400));
  }

  // set new password
  user.password = req.body.password;
  await user.save();

  // create and token to user
  createAndSendToken(res, user);
});

//======================== MIDDLEWARE ======================
module.exports.protect = catchAsync(async (req, res, next) => {
  // allows access to only signed users
  let token;

  // get token from request headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  // verify jwt
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  // find current user from jwt id
  const currentUser = await User.findById(decoded.id);
  if (!currentUser || !currentUser.isActive) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  req.user = currentUser;
  next();
});

// ============== MIDDLEWARE =============
module.exports.restrictTo = (...roles) => {
  // allows role based access to users
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};
