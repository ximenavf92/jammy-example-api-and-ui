var inventory = require('./data/inventory.js');

exports.handler = function(event, context, callback) {

  console.log('inventory :>> ', inventory);

  // get the inventory details for this product
  let data = inventory[event.queryStringParameters.productId];

  console.log('data :>> ', data);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });

}
