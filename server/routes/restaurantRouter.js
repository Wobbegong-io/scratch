const express = require('express');
const restaurantRouter = express.Router();
const restaurantController = require('../controllers/restaurantController.js');

//middleware for fetching a restaurant based on the selected parameters
restaurantRouter.post(
  '/yelp',
  restaurantController.getRestaurants,
  (req, res) => {

    return res.status(200).json(res.locals.randomRest);
  }
);

//middleware for saving a restaurant to favorites

//middleware for deleting a saved restaurant

//middleware for adding comments on restaurants

//middleware for adding comments on restaurants

module.exports = restaurantRouter;
