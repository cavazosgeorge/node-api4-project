const Users = require("../models/users");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// METHOD(GET) GET ALL USERS => /API/V1/USERS
exports.getUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    success: true,
    results: users.length,
    data: users,
  });
});
