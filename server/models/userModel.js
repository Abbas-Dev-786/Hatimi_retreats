const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const mongoosePaginate = require("mongoose-paginate-v2");

const ROLES = ["admin", "user"];

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Please Enter full name"],
    },
    email: {
      type: String,
      trim: true,
      validate: [validator.isEmail, "Enter valid email address"],
      required: [true, "Please Enter email address"],
    },
    profileImg: {
      type: String,
      trim: true,
      default: "download_j53sib.jpg",
    },
    phone: {
      type: String,
      trim: true,
      validate: [validator.isMobilePhone, "Enter valid phone number"],
      required: [true, "Please Enter phone number"],
    },
    whatsapp: {
      type: String,
      trim: true,
      validate: [validator.isMobilePhone, "Enter valid whatsapp number"],
      required: [true, "Please Enter whatsapp number"],
    },
    vatan: {
      type: String,
      trim: true,
      required: [true, "Please Enter your Vatan"],
    },
    country: {
      type: String,
      trim: true,
      required: [true, "Please Enter Country"],
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
      unique: [true, "ITS Already exists"],
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

userSchema.methods.deleteAllUserRelations = async function (userId) {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    await Review.deleteMany({ user: userObjectId });
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
