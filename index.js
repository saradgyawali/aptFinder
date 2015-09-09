
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  db = require('./models'),
  // User = require('./models/user'),
  session = require('express-session'),
  path= require('path'),
  views = path.join(process.cwd(), '/public/views'),
  methodOverride = require("method-override");

//serve css bootstrap and javascript files
app.use("/static", express.static("public"));
app.use("/vendor",express.static("bower_components"))

// connect to mongodb
// mongoose.connect('mongodb://localhost/apartments');

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
  
// set session options
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));
//static route
app.get('/', function(req,res){
  res.sendFile(views + '/index.html');
});

// middleware to manage sessions
app.use('/', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user.id;
  };

  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    db.User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };

  // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };

  next();
});

// signup route (renders signup view)
app.get('/signup', function (req, res) {
  req.currentUser(function (err, user) {
    // redirect if current user
    if (user) {
      res.redirect('/profile');
    } else {
      res.sendFile(__dirname + '/public/views/signup.html');
    }
  });
});

// signup rout (Creates new user in db)
app.post('/signup', function(req,res){
  // take data submitted from user, and create new user
  // use db.User.createSecure(...);
});

// user submits the signup form
app.post('/users', function (req, res) {

  // grab user data from params (req.body)
  var newUser = req.body.user;

  // create new user with secure password
  db.User.createSecure(newUser.email, newUser.password, function (err, user) {
    res.redirect('/login');
  });
});

// login route (renders login view)
app.get('/login', function (req, res) {
  req.currentUser(function (err, user) {
    // redirect if current user
    if (user) {
      res.redirect('/profile');
    } else {
      res.sendFile(__dirname + '/public/views/login.html');
    }
  });
});

// user submits the login form
app.post('/login', function (req, res) {

  // grab user data from params (req.body)
  var userData = req.body.user;

  // call authenticate function to check if password user entered is correct
  db.User.authenticate(userData.email, userData.password, function (err, user) {
    // saves user id to session
    req.login(user);

    // redirect to user profile
    res.redirect('/profile');
  });
});

// user profile page
app.get('/profile', function (req, res) {
  // finds user currently logged in
  req.currentUser(function (err, user) {
    if (user) {
      console.log("THIS IS USER apartments", user.apartments);
      res.sendFile(views + '/profile.html');
    // redirect if there is no current user
    } else {
      res.redirect("/login");
    }
  });
});

// logout route (destroys session)
app.delete('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

//Redirects to the profile
app.get("/movein", function(req, res){
  res.sendFile(views + "/profile.html")
})

///////////////////////////////////////
//Mockupsss//////////////////////////
///////////////////////////////////
app.get("/mockup", function(req, res){
  res.sendFile(views + "/mockup.html")
})

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on locahost:3000');
});