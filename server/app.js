// 3rd party modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

//cloudinary config
const cloudinary = require("./utils/cloudinary");

// route handlers
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const courtRouter = require("./routes/courtRoute");
const amenityRouter = require("./routes/amenityRoute");
const ruleRouter = require("./routes/rulesRoute");
const reviewRouter = require("./routes/reviewRoute");
const bookingRouter = require("./routes/bookingRoute");

// custom util modules
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

// Initialise the app
const app = express();

// Implement CORS
const whitelist = [
  "http://localhost:5173",
  "https://hatimi-retreats.netlify.app/",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new AppError("Not allowed by CORS"));
    }
  },
};
app.use(cors());
app.options("*", cors());

// Set security HTTP headers
app.use(helmet());

// Api logging
app.use(morgan("dev"));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "type",
      "ratingsQuantity",
      "ratingsAverage",
      "maxCapacity",
      "city",
      "chargePerHour",
      "price",
      "openingTime",
      "closingTime",
      "startTime",
      "endTime",
    ],
  })
);

// cloudinary config
cloudinary.config();

// routes
const BASE_URL = "/api/v1";
app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/users`, userRouter);
app.use(`${BASE_URL}/courts`, courtRouter);
app.use(`${BASE_URL}/amenities`, amenityRouter);
app.use(`${BASE_URL}/rules`, ruleRouter);
app.use(`${BASE_URL}/reviews`, reviewRouter);
app.use(`${BASE_URL}/bookings`, bookingRouter);

// invalid route handler
app.all("*", (req, _, next) =>
  next(new AppError(`The route ${req.originalUrl} does not exists`, 404))
);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
