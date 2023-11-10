const mongoose = require("mongoose");
const Booking = require("../models/bookingModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./factoryHandler");
const Court = require("../models/CourtModel");

module.exports.createBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.create(req.body);

  res.status(201).json({ status: "success", data: booking });
});

module.exports.getBooking = factory.getDoc(Booking);

module.exports.getAllBookings = factory.getAllDocs(Booking);

module.exports.updateBooking = factory.updateDoc(Booking);

module.exports.deleteBooking = factory.deleteDoc(Booking);

module.exports.checkBody = catchAsync(async (req, res, next) => {
  if (!(await Court.exists({ _id: req.params.courtId }))) {
    return next(new AppError("Court does not exists", 404));
  }

  if (!req.body.court) req.body.court = req.params.courtId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
});

module.exports.checkOverLappingBookings = catchAsync(async (req, res, next) => {
  const bookedSlots = await Booking.aggregate([
    {
      $match: {
        startTime: {
          $lt: new Date(req.body.endTime),
        },
        endTime: {
          $gt: new Date(req.body.startTime),
        },
      },
    },
  ]);

  if (bookedSlots.length) {
    return next(new AppError("Slot is already booked", 400));
  }

  next();
});
