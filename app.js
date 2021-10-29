const express = require("express");
const app = express();

const dotenv = require("dotenv");

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

// USE ROUTES

// HANDLE UNHANDLED ROUTES

// MIDDLEWARE => HANDLE ERRORS

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
