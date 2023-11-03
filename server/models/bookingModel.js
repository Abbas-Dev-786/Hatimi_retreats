const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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
      require: [true, "Booking must have a price."],
    },
    startTime: {
      type: Date,
      require: [true, "Booking must have a start time."],
    },
    endTime: {
      type: Date,
      require: [true, "Booking must have a end time."],
    },
    status: {
      type: String,
      enum: {
        values: ["confirmed", "rejected"],
        message: "not valid status",
        default: "confirmed",
      },
      default: "confirmed",
    },
  },
  { timestamps: true }
);

bookingSchema.plugin(mongoosePaginate);

bookingSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "firstName lastName" }).populate({
    path: "court",
    select: "name",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
