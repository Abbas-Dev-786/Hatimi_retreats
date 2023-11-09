// 3rd party modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//cloudinary config
const cloudinary = require("./utils/cloudinary");

// router handlers
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const courtRouter = require("./routes/courtRoute");
const amenityRouter = require("./routes/amenityRoute");
const ruleRouter = require("./routes/rulesRoute");
const reviewRouter = require("./routes/reviewRoute");

// custom util modules
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

cloudinary.config();

// routes
const BASE_URL = "/api/v1";
app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/users`, userRouter);
app.use(`${BASE_URL}/courts`, courtRouter);
app.use(`${BASE_URL}/amenities`, amenityRouter);
app.use(`${BASE_URL}/rules`, ruleRouter);
app.use(`${BASE_URL}/reviews`, reviewRouter);

// invalid route handler
app.all("*", (req, _, next) =>
  next(new AppError(`The route ${req.originalUrl} does not exists`, 404))
);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
