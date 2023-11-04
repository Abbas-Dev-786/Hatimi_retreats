// 3rd party modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// router handlers
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");

// custom util modules
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

// routes
const BASE_URL = "/api/v1";
app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/users`, userRouter);

// invalid route handler
app.all("*", (req, _, next) =>
  next(new AppError(`The route ${req.originalUrl} does not exists`, 404))
);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
