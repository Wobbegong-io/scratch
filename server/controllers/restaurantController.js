const { ModuleFilenameHelpers } = require('webpack');
const axios = require('axios');

const restaurantController = {};

//hard-coded search parameters for the user... will replace these with user-input from the front end
// const config = {
//   headers: {
//     Authorization: process.env.YELP_API,
//   },
//   params: {
//     term: req.body.term,
//     location: req.body.location,
//     radius: 1500,
//     limit: 50
//   },
// };
//generate a random number to pull a restaurant from the returned data. current limit to 5 (not sure how large the dataset is that is returned)


//add middleware to handle restaurant info here:
restaurantController.getRestaurants = (req, res, next) => {
  const { term, location } = req.body;
  console.log('req.body -->', req.body);
  axios
  .request('https://api.yelp.com/v3/businesses/search', {
    headers: {
      Authorization: process.env.YELP_API,
    },
    params: {
      term,
      location,
      categories: 'restaurant',
      radius: 1500,
      limit: 50,
    },
  })
  .then((response) => {
    const randomRestNum = Math.floor(Math.random() * response.data.businesses.length - 1);
    res.locals.randomRest = response.data.businesses[randomRestNum];
      console.log('random restaurant picked in restaurant controller line 41 --> ', response.data.businesses[randomRestNum])
    })
    .then(() => {
      return next();
    });
};

//middleware to get the restaurant's location on Mapbox
// restaurantController.getRestMapLocation = (req,res,next)=>{
//   const restaurantLocation = res.locals.randomRes
// }

//middleware to get random restaurant

//middleware to save restaurant to favorites

//middleware to add notes to restaurant

module.exports = restaurantController;
