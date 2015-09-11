var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/apartments");

module.exports.User = require("./user.js");
module.exports.Apartment = require("./apartment.js");