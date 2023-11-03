const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const amenitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, "Amenity must have a name"],
    },
  },
  { timestamps: true }
);

amenitySchema.plugin(mongoosePaginate);

const Amenity = mongoose.model("Amenity", amenitySchema);
module.exports = Amenity;
