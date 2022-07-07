const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const userRouter = require('./routes/userRouter.js');
const restaurantRouter = require('./routes/restaurantRouter.js');
const connectDB = require('../db/connect');
const sessionController = require('./controllers/sessionController.js');
const cookieController = require('./controllers/cookieController.js')
const { send } = require('process');
const Port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

//any access to the DB regarding using user info (/sign up, /allUsers, /login, /logout)
app.use('/users', userRouter);

//serves a random restaurant to the front end based on input parameters
//check if there is a active session via sessionController.
//if yes, continue to the restaurantController.
//if no, alert 'We're sorry your session has ended, please log in again' and  continue to the login page
//use the restaurantController to return a random restaurant from the selected category
//pass the found restaurant back to the front end to render
app.use('/api', restaurantRouter);

//serves index.html to the browser, which will then render the app
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.post('/logout', cookieController.deleteSSIDCookie, sessionController.deleteSession, (req, res) => {
  console.log('clearCookie');
  return res.status(200);
});

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
