const User = require("../models/userModel");
const moment = require("moment");
const Court = require("../models/CourtModel");
const upload = require("../utils/fileUploads");
const factory = require("./factoryHandler");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

// get all courts => All
module.exports.getAllCourts = factory.getAllDocs(Court);

// create court => Admin
module.exports.createCourt = factory.createDoc(Court);

// get court => All
module.exports.getCourt = factory.getDoc(Court);

// update court => Admin
module.exports.updateCourt = factory.updateDoc(Court);

// delete court => Admin
module.exports.deleteCourt = factory.deleteDoc(Court);

// add amenity of court => Admin
module.exports.addAmenity = catchAsync(async (req, res, next) => {
  const court = await Court.findByIdAndUpdate(
    req.params.courtId,
    {
      $addToSet: {
        amenities: {
          $each: req.body.amenities || [],
        },
      },
    },
    { runValidators: true, new: true }
  );

  if (!court) {
    return next(new AppError("Court does not exists", 404));
  }

  res.status(201).json({ status: "success", data: court });
});

// delete amenity of court => Admin
module.exports.deleteAmenity = catchAsync(async (req, res, next) => {
  const court = await Court.findByIdAndUpdate(
    req.params.courtId,
    {
      $pullAll: {
        amenities: req.body.amenities,
      },
    },
    { runValidators: true, new: true }
  );

  if (!court) {
    return next(new AppError("Court does not exists", 404));
  }

  res.status(204).json({ status: "success", data: court });
});

// get Available time slots => All
module.exports.getAvailableTimeSlots = catchAsync(async (req, res, next) => {
  const court = await Court.findById(req.params.id);

  if (!court) {
    return next(new AppError("Court does not exists", 404));
  }

  const allTimeSlots = court.getAvailableSlots();

  res.status(200).json({ status: "success", data: allTimeSlots });
});

// get All cities => All
module.exports.getAllCities = catchAsync(async (req, res, next) => {
  const cities = await Court.aggregate([
    {
      $group: {
        _id: "$city",
      },
    },
  ]);

  res
    .status(200)
    .json({ status: "success", results: cities.length, data: cities });
});

// set location coords Middleware
module.exports.setCoords = (req, res, next) => {
  if (req.body.location) {
    req.body.location = { coordinates: req.body?.location };
  }

  next();
};

// image upload middleware
module.exports.uploadCourtImages = upload.fields([
  { name: "coverImage", maxCount: 1 },
  { name: "images", maxCount: 8 },
]);

// image url handler middleware
module.exports.setImages = (req, res, next) => {
  req.body.coverImage = req?.files?.coverImage?.[0]?.path;
  req.body.images = req?.files?.images?.map((img) => img?.path);

  next();
};

// get top 10 cities middleware
module.exports.getTop10 = (req, res, next) => {
  req.query.limit = 10;
  req.query.sort = "-price";

  next();
};
