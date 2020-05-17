var inventory = require('./data/inventory.json');

exports.handler = function(event, context, callback) {

  // get the inventory details for this product
  let data = inventory[event.queryStringParameters.productId];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });

}
