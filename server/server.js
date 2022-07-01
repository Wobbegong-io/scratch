const express = require('express');
const app = express ()
const path = require('path')
require('dotenv').config()
//const MONGO_URI = process.env.mongoURI;
const router = require('./router.js')
const connectDB = require('../db/connect')
const Port = 3000;
const axios = require('axios');
const config = {
  headers: {
    Authorization: process.env.YELP_API
  },
  params: {
    term: "bar",
    location: "Austin",
    radius: 1500,
    limit: 50
  },
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

app.use('/signup', router)

app.get('/yelp', (req, res) => {
  //const {restaurant} = req.params;
  axios.request("https://api.yelp.com/v3/businesses/search", config)
  .then((response) => {
  return res.status(201).send(response.data.businesses)
    //return res.status(201).send(response)
  })
})

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//app.listen(3000) //listens on port 3000 -> http://localhost:3000/

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