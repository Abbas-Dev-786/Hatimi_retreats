const Court = require("../models/courtModel");
const upload = require("../utils/fileUploads");
const factory = require("./factoryHandler");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const generateTimeSlots = require("../utils/generateTimeSlots");
const Booking = require("../models/bookingModel");

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

  const allTimeSlots = generateTimeSlots(court.openingTime, court.closingTime);

  const existingBookings = await Booking.find({
    $expr: {
      $eq: [
        req.body.date,
        { $dateToString: { date: "$startTime", format: "%Y-%m-%d" } },
      ],
    },
  });

  const availableSlots = allTimeSlots.map((slot) => {
    for (const booking of existingBookings) {
      if (
        slot.startTime < booking.endTime &&
        slot.endTime > booking.startTime
      ) {
        return { ...slot, isBooked: true };
      }
    }
    return { ...slot, isBooked: false };
  });

  res.status(200).json({
    status: "success",
    results: availableSlots.length,
    data: availableSlots,
  });
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

// get All sports within a city => All
module.exports.getAllSportsWithinCity = catchAsync(async (req, res, next) => {
  const regex = new RegExp(["^", req.params.city, "$"].join(""), "i");

  const cities = await Court.aggregate([
    {
      $match: {
        city: regex,
      },
    },
    {
      $group: {
        _id: "$type",
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
  req.body.coverImage = req?.files?.coverImage?.[0]?.path?.split("/")?.at(-1);
  req.body.images = req?.files?.images?.map((img) =>
    img?.path?.split("/")?.at(-1)
  );

  next();
};

// get top 10 cities middleware
module.exports.getTop10 = (req, res, next) => {
  req.query.limit = 10;
  req.query.sort = "-chargePerHour";

  next();
};
