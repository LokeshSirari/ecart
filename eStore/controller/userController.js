//Import required module
var User = require('../models/signedUpUser');
var ProductList = require('../models/productList');


// export the postEmployee method
exports.postUser = function(req, res){
  // creating the new employee
  var user = new User({
    name:        req.body.name,
    emailId:     req.body.email,
    phoneNumber: req.body.mobile,
    password:        req.body.password
  
  });

  //save the creating employee
  user.save(function(error,response){
    // handle the error
      if(error){
        return error;
      }
      else{
        //send the response to the browser
        res.json({
          success: true,
          body: response
        });
      }
  }); // end of save method
}

// export getAllEmployee method
exports.getProductList = function(req,res){
    ProductList.find({},function(error,response){
        if(error){
            return res.json(req,response,error);
        }
        //sending the reponse to the browser
        res.json(response);

    });
   
}


