const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('./controllers/userController')

//import controller
// the route for posting from /signup
// router.post('/', (req, res) => {
//   return res.status(201).json('hello');
// })

router.post('/', userController.createUser, (req, res) => {
  return res.status(201).json(res.locals.id);
})


//route for login/landing page 

//route for the app page specific to the logged in user

//route for saving restaurants

module.exports = router;