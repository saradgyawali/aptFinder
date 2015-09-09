//require mongoose
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var Apartment = new Schema({
	name: String,
	bedroom: Number,
	city: String,
	phone: Number,
	email: String,
	address: String,
	image_url: String,
	price: Number
});

var Apartment = mongoose.model("Apartment", Apartment);

module.exports = Apartment;

