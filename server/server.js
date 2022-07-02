const express = require('express');
const app = express ()
const path = require('path')
require('dotenv').config()
const router = require('./router.js')
const connectDB = require('../db/connect')
const Port = 3000;
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

app.use('/signup', router)

app.post('/yelp', (req, res) => {
  //const {restaurant} = req.params;
  axios.request("https://api.yelp.com/v3/businesses/search", {
  headers: {
    Authorization: process.env.YELP_API
  },
  params: {
    term: req.body.term,
    location: req.body.location,
    radius: 1500,
    limit: 50
  },
})
  .then((response) => {
    console.log(response.data.businesses);
  return res.status(201).json(response.data.businesses)
  }).catch(err => console.log(err.response.status));
})

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

const start = async () => {
  try {
      await connectDB(process.env.MONGO_URI)
      app.listen(Port, () => {
      console.log('server up and running')
      });
  } catch (error) {
      console.log(error)
  }
}

start()