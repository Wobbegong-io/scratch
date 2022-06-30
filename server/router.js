const express = require('express');
const router = express.Router();
const path = require('path');

//import controller
// the route for posting from /signup
router.post('/', userController.createUser, (req, res) => {
  return res.sendStatus(201);
})

//route for login/landing page 

//route for the app page specific to the logged in user

//route for saving restaurants
