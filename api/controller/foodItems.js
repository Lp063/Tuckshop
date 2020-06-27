var config      =   require('../config/config');
var model_foodItems = require('../model/foodItems');
var express     =   require('express')
var router      =   express.Router()

router.get('/', function (req, res) {
  response = model_foodItems.getFoodItems(req.body,function(err,data){
    var response={
      success:0,
      data:[]
    };
    if (data.length) {
      var items = data.map(function(singleItem){
        var temp={
          id:singleItem.id,
          title:singleItem.name,
          serving:singleItem.serving,
          rate:parseInt(singleItem.price),
          purchaseQuantity:0,
          currency:singleItem.currency
        };
        return temp;
      });
      response={
        success:1,
        data:items
      }
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));  
  });
});


module.exports = router