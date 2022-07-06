const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');


const userController = {};

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = (req, res, next) => {
  const { username, password, address } = req.body.user;
  User.create({
    username,
    password,
    address,
  })
    .then((data) => {
      // console.log("data: ", data.id)
      res.locals.user = data;
      res.locals.username = data.username;
      return next();
    })
    .catch((err) => {
      return next('Error in userController.createUser: ' + JSON.stringify(err));
    });
};
// verify user
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body.user;


  if (!username || !password) return next('Missing username or password in verifyUser');

  User.findOne({ username }, (err, user) => {

    if (err) {
      //database error
      return next('Database Error in userController.verifyUser: ' + JSON.stringify(err));
    } else if (!user) {
      //no user was found
      //Question, if the below isnt correct, how should we handle

      // res.redirect('/SignUp');

    } else {
      //user was found, compare the password to the hashed one
      bcrypt.compare(password, user.password).then(result => {
        if (!result) {
          //password did not match
          //Question, if the below isnt correct, how should we handle

          // res.redirect('/SignUp')

        } else {
          res.locals.user = user
          res.locals.username = user.username
          return next();
        }
      })
        .catch(err => {
          //error while bcrypt was running
          return next('Error while bcrypt was running in userController.verifyUser: ' + JSON.stringify(err));
        })
    }
  })
}

//middleware to bcrypt user data

//middleware to get all users
userController.getAllUsers = (req, res, next) => {
  return next();
};

//middleware to find a user

//middleware to reset user password

module.exports = userController;
