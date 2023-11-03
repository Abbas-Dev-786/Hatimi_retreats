const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const mongoosePaginate = require("mongoose-paginate-v2");

const ROLES = ["admin", "user"];

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please Enter first name"],
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
      // required: [true, "Please Enter last name"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      validate: [validator.isEmail, "Enter valid email address"],
      required: [true, "Please Enter email address"],
    },
    phone: {
      type: String,
      trim: true,
      validate: [validator.isMobilePhone, "Enter valid phone number"],
      required: [true, "Please Enter phone number"],
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
    role: {
      type: String,
      enum: {
        values: ROLES,
        message: `role must be either ${ROLES.join(", ")}.`,
        default: ROLES[ROLES.length - 1],
      },
      default: ROLES[ROLES.length - 1],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      trim: true,
      min: 8,
      max: 25,
      select: false,
    },
    its: {
      type: String,
      trim: true,
      minLength: [8, "min 8 characters"],
      maxLength: [8, "max 8 characters"],
      required: [true, "Please Enter its id"],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.plugin(mongoosePaginate);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.comparePasswords = async (enteredPassword, storedPassword) =>
  await bcrypt.compare(enteredPassword, storedPassword);

const User = mongoose.model("User", userSchema);
module.exports = User;
