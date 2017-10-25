var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var userSchema = new Schema({
    name: { type: String },
    emailId: { type: String , unique: true},
    phoneNumber: { type: Number },
    password: { type: String }
});

// we need to create a model for using schema
var User = mongoose.model('signedUpUser', userSchema);

// make this available to our employee in our Node applications
module.exports = User;