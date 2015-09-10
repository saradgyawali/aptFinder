//require mongoose
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var Apartment = new Schema({
	// name: String,
	// phone: Number,
	// email: String,
	// city: String,
	// address: String,
	// bedroom: Number,
	url: String
	// price: Number
});

var Apartment = mongoose.model("Apartment", Apartment);

module.exports = Apartment;

