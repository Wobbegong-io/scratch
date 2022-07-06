const Session = require('../models/sessionSchema');
const sessionController = {};

//startSession - create and save a new session in the Database
sessionController.startSession = (req, res, next) => {

  Session.create({ cookieId: res.locals.user.id }, (err, session) => {
    console.log("session", session)
    console.log("error", err)
    if (err) return next('Error in session Controller.startSession: ' + JSON.stringify(err));
    else return next()
  })
}
//add middleware to start a user session
//check if user is logged in
//if user logged in, create session

//if user not logged in, redirect to login page



//add middleware to end session via logout


module.exports = sessionController;