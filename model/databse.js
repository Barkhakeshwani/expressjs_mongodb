var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost:27017/login_db';
mongoose.connect(dbURI);
console.log('Mongoose connected to ' + dbURI)

// mongoose.connection.on('connected', function () {
// console.log('Mongoose connected to ' + dbURI);
// });
// mongoose.connection.on('error',function (err) {
// console.log('Mongoose connection error: ' + err);
// });
// mongoose.connection.on('disconnected', function () {
// console.log('Mongoose disconnected');
// });
// gracefulShutdown = function (msg, callback) {
// mongoose.connection.close(function () {
// console.log('Mongoose disconnected through ' + msg);
// callback();
// });
// };
// // For nodemon restarts
// process.once('SIGUSR2', function () {
// gracefulShutdown('nodemon restart', function () {
// process.kill(process.pid, 'SIGUSR2');
// });
// });
// // For app termination
// process.on('SIGINT', function() {
// gracefulShutdown('app termination', function () {
// process.exit(0);
// });
// });
// // For Heroku app termination
// process.on('SIGTERM', function() {
// gracefulShutdown('Heroku app shutdown', function () {
// process.exit(0);
// });
// });

// mongoose.connect(dbURI, function(err, db) {
//     if (err) throw err;
//     // db pointing to newdb
//     console.log("Switched to "+db.databaseName+" database");
//
//     // document to be inserted
//     var doc = { name: "Roshan", age: "22" };
//
//     // insert document to 'users' collection using insertOne
//     db.collection("users").insertOne(doc, function(err, res) {
//         if (err) throw err;
//         console.log("Document inserted");
//         // close the connection to db when you are done with it
//         db.close();
//     });
// });

//require('./myschema');
