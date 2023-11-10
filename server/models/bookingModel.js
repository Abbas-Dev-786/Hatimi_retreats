const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Court = require("./CourtModel");
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
    status: {
      type: String,
      enum: {
        values: ["confirmed", "rejected"],
        message: "not a valid status",
        default: "confirmed",
      },
      default: "confirmed",
    },
  },
  { timestamps: true }
);

bookingSchema.plugin(mongoosePaginate);

bookingSchema.pre("save", async function (next) {
  const court = await Court.findById(this.court);

  const endTime = moment(this.endTime);
  const startTime = moment(this.startTime);
  const duration = moment.duration(endTime.diff(startTime));
  const hours = duration.asHours();

  console.log(hours);

  this.price = hours * court.chargePerHour;

  next();
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "firstName lastName" }).populate({
    path: "court",
    select: "name",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
