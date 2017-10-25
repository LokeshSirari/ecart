//import the required modules
var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');


//api for posting the singed up users
router.route('/signup')
    .post(userController.postUser);

// api for getting the all product list
 router.route('/getProductList')
     .get(userController.getProductList);


// //export the router
module.exports = router;
