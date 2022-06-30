const User = require('./models/userSchema');

const userController = {};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = (req, res, next) => {
  User.create(req.body)
      .then((data) => {
        res.locals.id = data.id;
        return next();
      })
      .catch((err) => {
        return next('Error in userController.createUser: ' + JSON.stringify(err))
      });
  
};

module.exports = userController;
