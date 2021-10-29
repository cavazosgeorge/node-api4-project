const express = require("express");
const app = express();

const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/errors");
const ErrorHandler = require("./utils/errorHandler");

// SETTING UP CONFIG.ENV VARIABLES
dotenv.config({
  path: "./config/config.env",
});

// HANDLING UNCAUGHT EXCEPTION ERRORS
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// SETUP BODY PARSER
app.use(express.json());

// IMPORTING ALL ROUTES
const users = require("./routes/users");

// USE ROUTES
app.use("/api/v1", users);

// HANDLE UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} route not found`, 404));
});

// MIDDLEWARE => HANDLE ERRORS
app.use(errorMiddleware);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
