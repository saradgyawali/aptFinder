
// var db = require("./models");
//console.log(db);


// // user.apartments.push(...)
// // db.User.save();


// // var user = {"email":"Sarad@hotmail.com", "passwordDigest":"secret"};
// // console.log(newApartment);

// /* Add an apartment to an current user */
// // db.User.findOne({email: "Sarad@hotmail.com"}, function (err, user) {
// // 	if(err) {return console.log(err);}

// // 	var newApartment = {"name":"john oliver", "bedroom":2, "city": "san francisco", "phone":8738899999,
// //  		"email":"john@hotmail.com", "address":"225 bush st",
// //   		"image_url":"http://www.wherecoolthingshappen.com/wp-content/uploads/2013/07/awesomeanimals01.jpg",
// //    		"price":2700};

// // 	user.apartments.push(newApartment);
// // 	user.save(function(err, success) {
// // 		if(err) {return console.log(err);}
// // 		console.log("Apartment added Successfully.");
// // 		//process.exit(0);
// // 	});
// // });

// /* Create User */
// // db.User.create(user, function(err, success){
// // 	if(err) { return console.log(err) };
// // 	console.log("Successfully added user " + success.email);
// // 	process.exit(0);
// // })

// /* Remove all users from db */
// // db.User.remove({}, function(err, success) {
// // 	if(err) {return console.log(err);}
// // 	console.log("Removed All Users");
// // 	process.exit(0);
// // })

// /* Display all users in db */
// // db.User.find({}, function(err, success) {
// // 	if(err) {return console.log(err);}
// // 	success.forEach(function(user) {
// // 		console.log(user);
// // 	});
// // 	process.exit(0);
// // });


// 	// var newApartment2 = {
// 	// 	"name":"Justin Castilla", 
// 	// 	"bedroom":3, 
// 	// 	"city": "san francisco", 
// 	// 	"phone":5555555908,
//  // 		"email":"Justin@hotmail.com", 
//  // 		"address":"226 bush st",
//  //  		"image_url":"http://www.wherecoolthingshappen.com/wp-content/uploads/2013/07/awesomeanimals01.jpg",
//  //   		"price":2800
//  //   	};
// // db.Apartment.create(newApartment2, function(err, success) {
// // 	if(err) {return console.log(err);}
// // 	console.log("New Apartment Added Succesffuly to Apartment DB");
// // });

// var aptImages =[
// 	{url:"https://upload.wikimedia.org/wikipedia/commons/2/26/Southmoor_Apartment_Hotel.jpg"},
// 	{url:"http://www.namhouses.com/wp-content/uploads/2015/03/appartment.jpg"},
// 	{url:"http://www.credaichennai.in/sites/www.credaichennai.in/files/Elevation_2.jpg"},
// ]

// db.Apartment.remove({}, function(err, images){
// 	if(err) {return console.log(err);}
// 	console.log("images removed");
// 	aptImages.forEach(function(image){
// 		db.Apartment.create({url:image.url},function(err,newImage){
// 			if(err){ return console.log(err);}
// 			console.log("image added", newImage.url)
// 		});
// 	});
// });













