const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Court = require("./courtModel");
const moment = require("moment");

const bookingSchema = new mongoose.Schema(
  {
    court: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Court",
      required: [true, "Booking must belong to a court!"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Booking must belong to a User!"],
    },
    price: {
      type: Number,
      required: [true, "Booking must have a price."],
    },
    startTime: {
      type: Date,
      required: [true, "Booking must have a start time."],
    },
    endTime: {
      type: Date,
      required: [true, "Booking must have a end time."],
    },
    totalGuests: {
      type: Number,
      min: 0,
      required: [true, "Enter number of guests"],
    },
    status: {
      type: String,
      enum: {
        values: ["confirmed", "rejected", "pending"],
        message: "not a valid status",
        default: "pending",
      },
      default: "pending",
    },
  },
  { timestamps: true }
);

courtSchema.index({ startTime: 1, endTime: 1 });

bookingSchema.plugin(mongoosePaginate);

bookingSchema.pre("save", async function (next) {
  const court = await Court.findById(this.court);

  const endTime = moment(this.endTime);
  const startTime = moment(this.startTime);
  const duration = moment.duration(endTime.diff(startTime));
  const hours = duration.asHours();

  const extraCharges =
    this.totalGuests > court.maxCapacity
      ? court.extraMemberCharge * (this.totalGuests - court.maxCapacity)
      : 0;

  this.price = hours * (court.chargePerHour + extraCharges);

  next();
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "firstName lastName profileImg phone",
  }).populate({
    path: "court",
    select:
      "name address coverImage chargePerHour maxCapacity extraMemberCharge",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
