var express = require('express');
var router = express.Router();
require('../model/myschema.js');

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

// router.get('/login', function(req, res, next) {
//   res.render('loginPage');
// });

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/addDetails', function(req, res, next) {
  // res.render('home');
  console.log("test1");
  //var dbo = db.db("login_db");
  var myobj = { username : 'uname' , password : 'pass'};
  console.log("test2");
  db.collection("myCollection").insertOne(myobj, function(err, res){
    if(err) throw err;
    console.log("1 document inserted");

  });
  // var userData = req.body;
  // var uname = userData.username;
  // var pass = userData.password;
  //console.log("test2");
  // db.myCollection.insert({
  //   username : 'uname',
  //   password : 'pass'
  // })
  //userData.save();
  //res.send("item saved to database");
  console.log("item saved to database");
 // .then(item => {
 //   res.send("item saved to database");
 // })
 // .catch(err => {
 //   res.status(400).send("Unable to save to database");
 // });
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/completeprofile', function(req, res, next) {
  res.render('completeprofile');
});


module.exports = router;
