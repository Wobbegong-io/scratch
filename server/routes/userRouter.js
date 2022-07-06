const express = require('express');
const userRouter = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController')

//route for creating a user from 'signup'
userRouter.post('/signup',
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {

    return res.status(201).json(res.locals.user);

  });

//route to get all users

userRouter.get('/allUsers', userController.getAllUsers);

//route for login/landing page
userRouter.post('/login',
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {

    return res.status(201).json(res.locals.user);

  });

//route for the app page specific to the logged in user

module.exports = userRouter;
