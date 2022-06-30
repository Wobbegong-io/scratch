const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.mongoURI;

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


const savedRestaurantsSchema = new Schema({
    restaurantName: { type: String, required: true},
    restaurantCategory: { type: String, required: true},
    restaurantLocation: { type: String, required: true}, //yelp API returns the key 'location
    restaurantPhone: { type: String, required: true},
    restaurantRating: {type: Number, required: false}
});

module.exports = mongoose.model('savedRestaurant', savedRestaurantsSchema);
