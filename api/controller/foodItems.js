var config      =   require('../config/config');
const foodItems = require('../model/foodItems');
var express     =   require('express');
const { json } = require('body-parser');
var router      =   express.Router()

// POST /fooditems
/*
  Add food item
*/

// GET /fooditems
/*
  GET multiple food items
*/
router.get('/', async function (req, res) {

  var response={
    success:0,
    data:[],
    message:""
  };

  try {
    const foodItemsObj = new foodItems();
    const responseData = await foodItemsObj.get(req.body);
    if (responseData.length) {
      var items = responseData.map(function(singleItem){
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
  } catch (error) {
    
    response.message=error;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  }
  
  
  
  
   
  /* response = model_foodItems.getFoodItems(req.body,function(err,data){
    var response={
      success:0,
      data:[]
    };
    if (err) {
      console.log(err,data);
    } else {
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
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));  
  }); */
});

// PUT /fooditems
/*
  update multiple food items
*/

//DELETE /fooditems
/*
  delete all food items
*/


// GET /fooditems/{:id}
/*
  Get food item by ID
*/


// PUT /fooditems/{:id}
/*
  update food item by ID
*/

// DELETE /fooditems/{:id}
/*
  delete food item by ID
*/

module.exports = router