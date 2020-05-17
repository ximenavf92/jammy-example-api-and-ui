var products = require('./data/catalogue.json');
var inventory = require('./data/inventory.json');

exports.handler = function(event, context, callback) {

  let data = products[event.queryStringParameters.productId];
  let availability = inventory[event.queryStringParameters.productId];

  // Introduce outrageous price gauging.
  if(availability.stock == 0) {
    data.stock = availability.stock;
    data.price = data.rrp
  }
  else if(availability.stock < 10) {
    data.stock = "Last few items";
    data.price = ((10 - availability.stock) * data.rrp ).toFixed(2);
  } else {
    data.stock = availability.stock;
    data.price = data.rrp
  }

  console.log('data :>> ', data);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });

}
