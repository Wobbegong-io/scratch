const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
//const MONGO_URI = process.env.mongoURI;
const userRouter = require('./routes/userRouter.js');
const restaurantRouter = require('./routes/restaurantRouter.js');
const connectDB = require('../db/connect');
const Port = 3000;
const axios = require('axios');
const config = {
  headers: {
    Authorization: process.env.YELP_API,
  },
  params: {
    term: 'bar',
    location: 'Austin',
    radius: 1500,
    limit: 50,
  },
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));




//any access to the DB regarding using user info (/sign up, /allUsers, /login, /logout)
app.use('/users', userRouter)

//serves a random restaurant to the front end based on input parameters
//check if there is a active session via sessionController.
//if yes, continue to the restaurantController.
//if no, alert 'We're sorry your session has ended, please log in again' and  continue to the login page
//use the restaurantController to return a random restaurant from the selected category
//pass the found restaurant back to the front end to render
app.use('/api', restaurantRouter);

// app.get('/yelp', (req, res) => {
//   //const {restaurant} = req.params;
//   axios
//     .request('https://api.yelp.com/v3/businesses/search', config)
//     .then((response) => {
//       return res.status(201).send(response.data.businesses);
//       //return res.status(201).send(response)
//     });
// });

//serves index.html to the browser, which will then render the app
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//app.listen(3000) //listens on port 3000 -> http://localhost:3000/

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log('server up and running');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
