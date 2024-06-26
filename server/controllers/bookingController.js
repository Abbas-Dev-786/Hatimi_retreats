const mongoose = require("mongoose");
const Court = require("../models/courtModel");
const Booking = require("../models/bookingModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./factoryHandler");
const Email = require("../utils/Email");

// create booking => All
module.exports.createBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.create(req.body);

  res.status(201).json({ status: "success", data: booking });

  //send email
  const url = "https://sports.hatimiproperties.com/admin/dashboard/requests";
  await new Email(req.user, url).sendNewBooking(
    req.court.name,
    req.body.startTime,
    req.body.endTime
  );
});

// update booking => All
module.exports.updateBooking = catchAsync(async (req, res, next) => {
  const updatedDoc = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!updatedDoc) {
    return next(new AppError("Document does not exists", 404));
  }

  res.status(200).json({ status: "success", data: updatedDoc });

  // if (req.body.status) {
  //   const url = "https://sports.hatimiproperties.com/bookings";
  //   await new Email(req.user, url).sendBookingStatus(
  //     req.court.name,
  //     req.body.startTime,
  //     req.body.endTime,
  //     req.body.status
  //   );
  // }
});

// get booking => All
module.exports.getBooking = factory.getDoc(Booking);

// get All bookings => All
module.exports.getAllBookings = factory.getAllDocs(Booking);

// delete booking => All
module.exports.deleteBooking = factory.deleteDoc(Booking);

// check slot availability
module.exports.checkSlotAvailability = catchAsync(async (req, res, next) => {
  const bookedSlots = await Booking.aggregate([
    {
      $match: {
        court: new mongoose.Types.ObjectId(req.params.courtId),
        startTime: {
          $lt: new Date(req.body.endTime),
        },
        endTime: {
          $gt: new Date(req.body.startTime),
        },
        status: "confirmed",
      },
    },
  ]);

  if (bookedSlots.length) {
    return next(new AppError("Slot is already booked", 400));
  }

  res.status(200).json({ status: "success", isAvailable: true });
});

// check body middleware
module.exports.checkBody = catchAsync(async (req, res, next) => {
  if (!(await Court.exists({ _id: req.params.courtId }))) {
    return next(new AppError("Court does not exists", 404));
  }

  if (!req.body.court) req.body.court = req.params.courtId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
});

// set my middleware
module.exports.setME = catchAsync(async (req, res, next) => {
  req.query.user = req.user._id;

  next();
});

// check overlapping bookings middleware
module.exports.checkOverLappingBookings = catchAsync(async (req, res, next) => {
  const bookedSlots = await Booking.aggregate([
    {
      $match: {
        court: new mongoose.Types.ObjectId(req.params.courtId),
        startTime: {
          $lt: new Date(req.body.endTime),
        },
        endTime: {
          $gt: new Date(req.body.startTime),
        },
        status: "confirmed",
      },
    },
  ]);

  if (bookedSlots.length) {
    return next(new AppError("Slot is already booked", 400));
  }

  req.court = await Court.findById(req.params.courtId);
  next();
});
