const Users = require("../models/users");

// METHOD(GET) GET ALL USERS => /API/V1/USERS
exports.getUsers = async (req, res) => {
  Users.find()
    // .THEN => WE RECIEVED WHAT IS SUPPOSED TO BE THE CORRECT USER DATA
    .then((users) => {
      res.json(users);
    })
    // ERROR RESPONSE FOR DEVELOPER => 500 INTERNAL SERVER ERROR
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Error getting users",
        err: err.message,
      });
    });
};
