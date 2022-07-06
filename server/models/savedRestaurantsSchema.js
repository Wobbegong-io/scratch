const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.mongoURI;

const savedRestaurantsSchema = new Schema({
    restaurantName: { type: String, required: true},
    restaurantCategory: { type: String, required: true},
    restaurantLocation: { type: String, required: true}, //yelp API returns the key 'location
    restaurantPhone: { type: String, required: true},
    restaurantRating: {type: Number, required: false}
});

module.exports = mongoose.model('savedRestaurant', savedRestaurantsSchema);
