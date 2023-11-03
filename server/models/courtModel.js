const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const courtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please Enter court name"],
    },
    type: {
      type: String,
      trim: true,
      required: [true, "Please Enter court type"],
    },
    size: {
      type: String,
      trim: true,
      required: [true, "Please Enter court size"],
    },
    chargePerHour: {
      type: Number,
      min: 100,
      required: [true, "Please Enter court charge per hour"],
    },
    maxCapacity: {
      type: Number,
      min: 0,
      required: [true, "Please Enter court max capacity"],
    },
    extraMemberCharge: {
      type: Number,
      min: 0,
      required: [true, "Please Enter court extra member charge"],
    },
    city: {
      type: String,
      trim: true,
      required: [true, "Please Enter City"],
    },
    country: {
      type: String,
      trim: true,
      required: [true, "Please Enter Country"],
    },
    address: {
      type: String,
      trim: true,
      required: [true, "Please Enter address"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Court must have a description"],
    },
    openingTime: {
      type: Date,
      required: [true, "Court must have a opening time"],
    },
    closingTime: {
      type: Date,
      required: [true, "Court must have a closing time"],
    },
    location: {
      type: { type: String, default: "Point", enum: ["Point"] },
      coordinates: {
        type: [Number],
        validate: {
          validator: function (coords) {
            return coords.length === 2;
          },
          message: () => `Enter coordinates in proper format`,
        },
        required: [true, "Court must have a location."],
      },
    },
    coverImage: {
      type: String,
      trim: true,
      required: [true, "Court must have a coverImage."],
    },
    amenities: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Amenity",
    },
    images: {
      type: [String],
      validate: {
        validator: function (images) {
          return images.length >= 1;
        },
        message: () => `Please upload atleast one image of the court`,
      },
      required: [true, "Court must have images."],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    rules: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rule",
      //   required: [true, "Court must have a rules."],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

courtSchema.plugin(mongoosePaginate);

const Court = mongoose.model("Court", courtSchema);
module.exports = Court;
