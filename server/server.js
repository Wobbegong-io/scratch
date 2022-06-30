const express = require('express');
const app = express ()
const path = require('path')

const MONGO_URI = process.env.mongoURI;
const router = require('./router.js')

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'savedRestaurants',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

app.use('/signup', router)

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000) //listens on port 3000 -> http://localhost:3000/
