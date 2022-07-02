const express = require('express');
const userRouter = express.Router();
const path = require('path');
const userController = require('../controllers/userController');

//route for creating a user from 'signup'
userRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(201).json(res.locals.userId);
});

//route to get all users

userRouter.get('/allUsers', userController.getAllUsers);

//route for login/landing page
userRouter.post('/login', userController.login, (req,res)=>{
  return res.sendStatus(200);
})

//route for the app page specific to the logged in user

module.exports = userRouter;
