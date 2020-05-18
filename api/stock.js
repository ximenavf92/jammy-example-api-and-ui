var products = require('./data/catalogue.json');
var inventory = require('./data/inventory.json');

exports.handler = (event, context, callback) => {

  // get the inventory and price details for this product
  let catalogueItem = products[event.queryStringParameters.productId];
  let availability = inventory[event.queryStringParameters.productId];

  // Create a data object to pass back to the UI
  let data = {};

  // add the stock availability to the data passed back
  data.stock = availability.stock;

  // Introduce outrageous price gauging.
  if(availability.stock == 0) {
    data.price = catalogueItem.rrp
  }
  else if(availability.stock < 10) {
    data.price = ((10 - availability.stock) * catalogueItem.rrp ).toFixed(2);
  } else {
    data.price = catalogueItem.rrp
  }


  // Send the response
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });


}
