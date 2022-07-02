const User = require('../models/userSchema');

const userController = {};

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = (req, res, next) => {
  const { username, password, address } = req.body;
  User.create({
    username,
    password,
    address,
  })
    .then((data) => {
      res.locals.userId = data.id;
      return next();
    })
    .catch((err) => {
      return next('Error in userController.createUser: ' + JSON.stringify(err));
    });
};

//middleware to bcrypt user data

//middleware to get all users
userController.getAllUsers = (req, res, next) => {
  return next();
};

//middleware to find a user

//middleware to reset user password

module.exports = userController;
