var config      =   require('../config/config');
const jwt       =   require('jsonwebtoken');
const foodItems = require('../model/foodItems');
var express     =   require('express');
const { json } = require('body-parser');
var router      =   express.Router()

// POST /fooditems
/*
  Add food item
*/
router.post('/', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var response={
    success:0,
    data:[],
    message:""
  };
  
  try {
    const foodItemsObj = new foodItems();
    const insertState = await foodItemsObj.addOne(req.body);

    if (insertState) {
      response.success=1;
      response.data = insertState;
    }
    res.end(JSON.stringify(response));
  } catch (error) {
    response.message = error;
    res.end(JSON.stringify(response));
  }
});

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
    const foodItemsObj = new foodItems(req.body.eventId);
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
    res.status(200).end(JSON.stringify(response));
  } catch (error) {
    
    response.message=error;
    res.setHeader('Content-Type', 'application/json');
    res.status(404).end(JSON.stringify(response));
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
router.get('/:id', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var response={
    success:0,
    data:[],
    message:""
  };
  
  try {
    const foodItemsObj = new foodItems(req.params.id);
    const insertState = await foodItemsObj.getOne();

    if (insertState.length) {
      response.success=1;
      response.data = insertState;
      res.status(200).end(JSON.stringify(response));
    }else{
      res.status(404).end(JSON.stringify(response));
    }
  } catch (error) {
    response.message = error;
    res.status(404).end(JSON.stringify(response));
  }
});



// PUT /fooditems/{:id}
/*
  update food item by ID
*/
router.put('/:id', async function (req, res) {
  
  res.setHeader('Content-Type', 'application/json');
  var response={
    success:0,
    data:[],
    message:""
  };
  
  try {
    const foodItemsObj = new foodItems(req.params.id);
    const updateStatus = await foodItemsObj.updateOne(req.body);

    if (typeof updateStatus != null) {
      response.success=1;
      response.data = updateStatus;
      res.status(200).end(JSON.stringify(response));
    }else{
      res.status(404).end(JSON.stringify(response));
    }
  } catch (error) {
    response.message = error;
    res.status(404).end(JSON.stringify(response));
  }
});

// DELETE /fooditems/{:id}
/*
  delete food item by ID
*/
router.delete('/:id', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var response={
    success:0,
    data:[],
    message:""
  };
  
  try {
    const foodItemsObj = new foodItems(req.params.id);
    const deleteState = await foodItemsObj.deleteOne();

    if (typeof deleteState != null) {
      response.success=1;
      response.data = deleteState;
      res.status(200).end(JSON.stringify(response));
    }else{
      res.status(404).end(JSON.stringify(response));
    }
  } catch (error) {
    response.message = error;
    res.status(404).end(JSON.stringify(response));
  }
});

module.exports = router