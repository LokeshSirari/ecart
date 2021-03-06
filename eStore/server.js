// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/nodeuser');

// Create Express application
var app = module.exports = express();

//var NODE_ENV = 'development';
//Set Variables
//app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/routes')
app.use('/', routes);

// Use environment defined port or 3000
//var port = process.env.PORT || 8888;
var port = 4202;
// Start the server
app.listen(port);
console.log('Server starts on port ' + port);