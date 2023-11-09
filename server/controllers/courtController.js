const User = require("../models/userModel");
const Court = require("../models/CourtModel");
const upload = require("../utils/fileUploads");
const factory = require("./factoryHandler");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

module.exports.getAllCourts = factory.getAllDocs(Court);

module.exports.createCourt = factory.createDoc(Court);

module.exports.getCourt = factory.getDoc(Court);

module.exports.updateCourt = factory.updateDoc(Court);

module.exports.deleteCourt = factory.deleteDoc(Court);

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

module.exports.setCoords = (req, res, next) => {
  if (req.body.location) {
    req.body.location = { coordinates: req.body?.location };
  }

  next();
};

module.exports.uploadCourtImages = upload.fields([
  { name: "coverImage", maxCount: 1 },
  { name: "images", maxCount: 8 },
]);

module.exports.setImages = (req, res, next) => {
  req.body.coverImage = req?.files?.coverImage?.[0]?.path;
  req.body.images = req?.files?.images?.map((img) => img?.path);

  next();
};

module.exports.getAllCities = catchAsync(async (req, res, next) => {
  const cities = await Court.aggregate([
    {
      $group: {
        _id: "$city",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  res
    .status(200)
    .json({ status: "success", results: cities.length, data: cities });
});

module.exports.getTop10 = (req, res, next) => {
  req.query.limit = 10;
  req.query.sort = "-price";

  next();
};
