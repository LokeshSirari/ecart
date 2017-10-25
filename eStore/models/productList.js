var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var productSchema = new Schema({
    productId: {type:Number},
    productName: { type: String },
    imgUrl: { type: String },
    price: { type: Number }

});

// we need to create a model for using schema
var ProductList = mongoose.model('productList', productSchema);


module.exports = ProductList;
