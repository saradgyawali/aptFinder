//require mongoose
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var ApartmentSchema = new Schema({
	name: String,
	bedroom: Number,
	phone: Number,
	email: String,
	address: String,
	image_url: String,
	price: Number;
});

var Apartment = mongoose.model("Apartment", ApartmentSchema);
module.exports = Apartment;